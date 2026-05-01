# bpmt-doc Markdown-first 文档库设计

## 背景

`bpmt-doc` 用于建设 BPMT 的完整中文文档体系。当前主事实源是 `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite`，旧 GitBook 位于 `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`。

本设计采用 Markdown-first 方案：先建立 GitHub 和 AI 都能直接阅读的文档库，再把静态站生成器作为后续可选发布层。

## 目标

- 建立清晰、稳定、可持续迁移的 BPMT 中文文档结构。
- 让 GitHub 直接打开 Markdown 时具备完整阅读路径。
- 让 AI agent 能通过目录、迁移矩阵、来源标记和校准状态快速判断文档可信度。
- 从旧 GitBook 拷贝迁移高价值内容，但不把历史安装、部署、注册、外部 demo 等过期内容伪装成当前事实。
- 当前运行、部署、数据库、登录说明必须按 `bpmt-lite v1.3.0` 重写。

## 非目标

- 首批不搭建 GitBook、VitePress、Docusaurus 或其他文档站工程。
- 首批不一次性迁移旧 GitBook 的全部 839 个 Markdown 和图片文件。
- 首批不验证微信、Office、注册更新、快照升级等历史能力是否仍完整可用。
- 不改变 `bpmt-lite` 代码、Docker 配置或发布流程。

## 推荐方案

采用 Markdown-first 文档库。

备选方案曾包括：

- 继续 GitBook：复用旧文档模型较直接，但老生态维护体验一般，且不提升 AI 读取体验。
- VitePress/Docusaurus-first：适合公开站点，但会把当前重点从内容迁移转向站点工程。

本阶段选择 Markdown-first，因为它最快形成可信内容资产，并且以后可以无痛增加静态站配置。

## 文档库架构

建议结构：

```text
README.md
AGENTS.md
docs/
  index.md
  SUMMARY.md
  quick-start/
  concepts/
  user-guide/
  developer-guide/
  ops/
  reference/
  migration/
  assets/
```

各入口职责：

- `README.md`：仓库首页，说明文档定位、资料源和最短阅读路径。
- `AGENTS.md`：AI/agent 协作入口，记录事实源顺序、迁移规则和本地路径。
- `docs/index.md`：BPMT 文档首页，面向人类阅读。
- `docs/SUMMARY.md`：结构化章节导航，兼顾人类、GitHub、AI 和未来静态站生成器。
- `docs/assets/`：仓库内图片资源，旧 GitBook 图片迁入 `docs/assets/legacy-gitbook/`。

## 迁移分类

### A. 必须重写的当前运行类文档

以下内容不直接拷贝旧 GitBook：

- 快速开始
- 安装部署
- 数据库初始化
- 默认账号登录
- Docker 运行、配置覆盖、日志目录
- 维护者构建与发布说明

这些文档以 `bpmt-lite/AGENTS.md`、`bpmt-lite/README.md`、`database/README.md`、`docker-compose.yml`、`scripts/run.sh` 为准。

### B. 可以先拷贝再校准的功能文档

以下旧 GitBook 内容属于高价值迁移对象：

- 动态表视图
- 工作流视图
- 报表视图
- 模板开发视图
- 处理器视图
- 公告视图
- 脚本上下文
- 内置函数：`db`、`flow`、`user`、`queue`、`mail` 等
- 控件 API：`text`、`select`、`date`、`ueditor`、`user`、`detail` 等
- 组织架构、权限组、菜单、系统字典

迁移文档必须保留来源和状态，例如：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---
```

校准完成后改为：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 已校准
bpmt_lite_version: v1.3.0
last_verified: 2026-05-01
verified_against:
  - /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/platform/src/main/webapp
  - /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/database/bpmt-min.sql.gz
---
```

### C. 历史参考内容

以下内容首批只作为历史参考，不进入当前主路径：

- 微信企业号/公众号
- 注册与更新
- 快照升级
- 旧 Oracle/MySQL 安装最佳实践
- Office 在线查看等可能已被 `bpmt-lite` 边界裁剪或弱化的内容

处理方式：放入 `docs/migration/legacy/`，或在正式章节中明确标记为“历史参考”。

## 迁移矩阵

建立 `docs/migration/gitbook-migration-matrix.md`，逐行记录：

```text
旧路径 | 新路径 | 处理类型 | 状态 | 是否含图片 | 校准依据 | 备注
```

迁移矩阵必须能回答：

- 旧章节迁到哪里。
- 当前状态是未迁移、待校准、已校准还是历史参考。
- 是否包含图片。
- 校准依据来自 `bpmt-lite` 哪些文件或运行结果。

## 首批实施范围

第一批交付聚焦“骨架 + 当前运行路径 + 迁移样板”。

### 仓库入口

- 更新 `README.md`
- 建立 `docs/index.md`
- 建立 `docs/SUMMARY.md`

### 当前运行路径

- `docs/quick-start/quick-start.md`
- `docs/quick-start/login.md`
- `docs/quick-start/database-init.md`
- `docs/ops/docker-run.md`

内容按 `bpmt-lite v1.3.0` 重写。

### 迁移治理

- `docs/migration/gitbook-migration-matrix.md`
- `docs/migration/rules.md`

### 第一批迁移样板

- 动态表视图
- 脚本上下文
- `db` 内置函数
- `text` 控件
- 组织架构或权限组二选一

这些样板覆盖功能说明、API 说明、截图迁移、权限类文档四种主要形态。

## 图片规则

- 旧 GitBook 图片拷贝到 `docs/assets/legacy-gitbook/<旧章节目录>/`。
- Markdown 图片链接改为仓库内相对路径。
- 不修改图片内容，除非后续校准发现截图会误导当前版本。
- 含图片的迁移项必须在迁移矩阵里标注。

## 验收标准

- GitHub 直接打开 `README.md` 能知道如何阅读文档。
- `docs/SUMMARY.md` 能作为完整导航入口。
- Quick Start 内容与 `bpmt-lite v1.3.0` 当前 README 一致。
- 每篇迁移文档都有来源路径和校准状态。
- 图片链接不依赖旧 GitBook 外部路径。
- 迁移矩阵能追踪旧章节、新章节、处理类型和校准状态。
- 旧安装部署、旧注册更新、旧 demo 链接不会出现在当前主路径中。

## 后续批次

- 第二批：迁移控件全集和内置函数全集。
- 第三批：迁移模块视图、工作流、权限、系统设置。
- 第四批：处理微信、Office、注册更新、最佳实践等历史或待验证内容。
