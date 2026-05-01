import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sourceRoot = "/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook";
const docsRoot = path.join(repoRoot, "docs");
const assetsRoot = path.join(docsRoot, "assets", "gitbook");

const runtimeCurrent = new Set(["1.开始使用/1.1.快速安装.md"]);

const movedPaths = new Map([
  ["10.安装部署/10.5.其他工具.md", "9.其他设置/9.4.其他工具.md"],
  ["10.安装部署/10.5_safe_demo1.png", "9.其他设置/10.5_safe_demo1.png"],
  ["10.安装部署/10.5_safe_demo2.png", "9.其他设置/10.5_safe_demo2.png"],
]);

const chapterOrder = [
  "README.md",
  "SUMMARY.md",
  "1.开始使用",
  "2.数据库设计",
  "3.工作流设计",
  "4.微信开发",
  "5.模块视图",
  "6.脚本开发",
  "7.控件开发",
  "8.用户权限",
  "9.其他设置",
];

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".svn" || entry.name === "_book") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

function rel(file) {
  return path.relative(sourceRoot, file).split(path.sep).join("/");
}

function targetRel(relativePath) {
  return movedPaths.get(relativePath) ?? relativePath;
}

function shouldMigrate(relativePath) {
  if (movedPaths.has(relativePath)) return true;
  if (relativePath.startsWith("10.安装部署/")) return false;
  if (relativePath.startsWith("99.最佳实践/")) return false;
  return true;
}

function sortLegacy(a, b) {
  const ar = targetRel(rel(a));
  const br = targetRel(rel(b));
  const ai = chapterOrder.findIndex((prefix) => ar === prefix || ar.startsWith(`${prefix}/`));
  const bi = chapterOrder.findIndex((prefix) => br === prefix || br.startsWith(`${prefix}/`));
  if (ai !== bi) return ai - bi;
  return ar.localeCompare(br, "zh-Hans-CN");
}

function resetDocsRoot() {
  fs.mkdirSync(docsRoot, { recursive: true });
  for (const entry of fs.readdirSync(docsRoot)) {
    fs.rmSync(path.join(docsRoot, entry), { recursive: true, force: true });
  }
}

function normalizeMarkdownLinks(markdown) {
  return markdown.replace(/\.html(?=[)#\s])/g, ".md");
}

function stripFrontMatterAndTitle(markdown) {
  let body = markdown.replace(/^\uFEFF/, "");
  if (body.startsWith("---\n")) {
    const end = body.indexOf("\n---\n", 4);
    if (end >= 0) body = body.slice(end + 5);
  }
  return body.replace(/^#\s*[^\n]+\n+/, "").trimStart();
}

function trimRemovedChaptersAndMoveOtherTools(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  let skippingRemovedChapter = false;
  for (const line of lines) {
    if (/^\*\s+\[安装部署\]/.test(line) || /^\*\s+\[最佳实践\]/.test(line)) {
      skippingRemovedChapter = true;
      continue;
    }
    if (skippingRemovedChapter) {
      if (/^\*\s+/.test(line)) skippingRemovedChapter = false;
      else continue;
    }
    if (/\[系统字典\]/.test(line)) {
      output.push(line);
      output.push("\t* [其他工具](9.其他设置/9.4.其他工具.md)");
      continue;
    }
    output.push(line);
  }
  return output.join("\n");
}

function assetPathForLink(markdownTargetRel, imageLink) {
  const cleanLink = decodeURI(imageLink.split("#")[0].replace(/^<|>$/g, ""));
  const sourceImageRel = path
    .normalize(path.join(path.dirname(markdownTargetRel), cleanLink))
    .split(path.sep)
    .join("/");
  const targetImageRel = targetRel(sourceImageRel);
  const absoluteTarget = path.join(assetsRoot, targetImageRel);
  const absoluteMarkdownDir = path.dirname(path.join(docsRoot, markdownTargetRel));
  return path.relative(absoluteMarkdownDir, absoluteTarget).split(path.sep).join("/");
}

function rewriteImageLinks(markdown, markdownTargetRel) {
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, link) => {
    if (/^(https?:|data:|#)/.test(link)) return match;
    return `![${alt}](${assetPathForLink(markdownTargetRel, link)})`;
  });
}

function quickInstallPage() {
  return `# 30秒快速安装

当前 \`bpmt-lite v1.3.0\` 推荐使用 Docker 一键启动。只想快速体验，优先使用最小库：

\`\`\`bash
mkdir -p bpmt-lite && cd bpmt-lite
curl -fsSL https://raw.githubusercontent.com/wodenwang/bpmt-lite/v1.3.0/scripts/run.sh -o run.sh
sh run.sh min
\`\`\`

访问：

\`\`\`text
http://127.0.0.1:8080/
\`\`\`

移动端 H5 登录入口：

\`\`\`text
http://127.0.0.1:8080/login.jsp?_action_mode=h5
\`\`\`

默认账号：

\`\`\`text
用户名：admin
密码：admin
\`\`\`

如需完整业务库，使用同一个脚本但不传 \`min\`：

\`\`\`bash
mkdir -p bpmt-lite && cd bpmt-lite
curl -fsSL https://raw.githubusercontent.com/wodenwang/bpmt-lite/v1.3.0/scripts/run.sh -o run.sh
sh run.sh
\`\`\`
`;
}

function migrateMarkdown(file) {
  const relativePath = rel(file);
  const markdownTargetRel = targetRel(relativePath);
  const original = fs.readFileSync(file, "utf8");
  const body =
    relativePath === "1.开始使用/1.1.快速安装.md"
      ? quickInstallPage()
      : relativePath === "SUMMARY.md"
        ? trimRemovedChaptersAndMoveOtherTools(normalizeMarkdownLinks(original))
        : normalizeMarkdownLinks(original);
  const output = rewriteImageLinks(body, markdownTargetRel);
  const target = path.join(docsRoot, markdownTargetRel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${output.trimEnd()}\n`);
}

function copyAsset(file) {
  const target = path.join(assetsRoot, targetRel(rel(file)));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(file, target);
}

function updateReadme() {
  const content = `# bpmt-doc

\`bpmt-doc\` 是 BPMT 的 Markdown-first 中文文档库。当前文档结构直接沿用旧 GitBook 章节层级，并用 \`bpmt-lite v1.3.0\` 校准快速启动、数据库和登录说明。

## 从哪里开始

- 完整目录：[docs/SUMMARY.md](docs/SUMMARY.md)
- 当前快速启动：[docs/1.开始使用/1.1.快速安装.md](docs/1.开始使用/1.1.快速安装.md)
- 其他工具：[docs/9.其他设置/9.4.其他工具.md](docs/9.其他设置/9.4.其他工具.md)

## 当前运行基线

- 当前版本：\`v1.3.0\`
- 默认镜像：\`ghcr.io/wodenwang/bpmt-lite:1.3.0\`
- 默认地址：\`http://127.0.0.1:8080/\`
- H5 地址：\`http://127.0.0.1:8080/login.jsp?_action_mode=h5\`
- 默认账号：\`admin/admin\`
- 默认数据库：\`bpmt\`
- 最小数据库：\`bpmt_min\`

## 文档结构

\`docs/\` 下只保留旧 GitBook 章节结构、\`SUMMARY.md\` 和统一图片目录 \`docs/assets/gitbook/\`。\`安装部署\` 与 \`最佳实践\` 两章已移除，原 \`安装部署/其他工具\` 内容迁入 \`其他设置\`。
`;
  fs.writeFileSync(path.join(repoRoot, "README.md"), content);
}

resetDocsRoot();

const allFiles = walk(sourceRoot).sort(sortLegacy);
const markdownFiles = allFiles.filter((file) => file.endsWith(".md") && shouldMigrate(rel(file)));
const assetFiles = allFiles.filter(
  (file) => /\.(png|jpe?g|gif)$/i.test(file) && shouldMigrate(rel(file)),
);

for (const file of markdownFiles) migrateMarkdown(file);
for (const file of assetFiles) copyAsset(file);
updateReadme();

console.log(`Migrated ${markdownFiles.length} Markdown files and ${assetFiles.length} image assets.`);
