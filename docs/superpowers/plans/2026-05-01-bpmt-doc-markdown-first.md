# bpmt-doc Markdown-first Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first usable Markdown-first BPMT documentation library with current `bpmt-lite v1.3.0` quick-start docs, migration governance, and representative migrated GitBook samples.

**Architecture:** Keep Markdown as the source of truth and avoid static-site framework dependencies in the first batch. Use `docs/index.md` and `docs/SUMMARY.md` as the human and AI navigation layer, keep source calibration in front matter, and track every old GitBook page through a migration matrix.

**Tech Stack:** Markdown, Git, shell commands, `rg`, `find`, `sed`, and existing local source repositories at `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite` and `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`.

---

## Scope Check

This plan implements the approved first batch only:

- Repository and documentation navigation.
- Current `bpmt-lite v1.3.0` run path.
- Migration rules and matrix.
- Five representative migrated sample pages.
- Link and source checks.

It does not build a static site, migrate all GitBook pages, or validate historical WeChat, Office, registration, snapshot, Oracle, or MySQL deployment content.

## File Structure

Create or modify these files:

- Modify: `README.md` as the repository entry page.
- Modify: `AGENTS.md` to record the approved Markdown-first plan and next workflow.
- Create: `docs/index.md` as the BPMT documentation home page.
- Create: `docs/SUMMARY.md` as the full human and AI navigation index.
- Create: `docs/quick-start/quick-start.md` for the shortest `bpmt-lite v1.3.0` startup path.
- Create: `docs/quick-start/login.md` for web and H5 login facts.
- Create: `docs/quick-start/database-init.md` for `bpmt` and `bpmt_min` initialization behavior.
- Create: `docs/ops/docker-run.md` for Docker Compose operations, runtime directories, logs, and config overrides.
- Create: `docs/migration/rules.md` for migration status, front matter, image, and calibration rules.
- Create: `docs/migration/gitbook-migration-matrix.md` for the old-to-new chapter map.
- Create: `docs/concepts/module-views/dynamic-table-view.md` by migrating the old dynamic table view sample.
- Create: `docs/developer-guide/scripts/context.md` by migrating the old script context sample.
- Create: `docs/reference/functions/db.md` by migrating the old `db` function sample.
- Create: `docs/reference/widgets/text.md` by migrating the old `text` widget sample.
- Create: `docs/user-guide/permissions/organization.md` by migrating the old organization sample.
- Create directories under `docs/assets/legacy-gitbook/` for copied sample images.

Do not modify files in `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite` or `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`.

### Task 1: Refresh Source Facts

**Files:**
- Read: `AGENTS.md`
- Read: `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/AGENTS.md`
- Read: `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/README.md`
- Read: `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/database/README.md`
- Read: `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/scripts/run.sh`
- Read: `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/SUMMARY.md`

- [ ] **Step 1: Confirm the bpmt-doc local rules**

Run:

```bash
sed -n '1,260p' AGENTS.md
```

Expected: output includes `Source Of Truth 顺序`, `bpmt-lite 当前已知基线`, and `文档编写规则`.

- [ ] **Step 2: Confirm current bpmt-lite facts**

Run:

```bash
sed -n '1,260p' /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/AGENTS.md
sed -n '1,240p' /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/README.md
sed -n '1,220p' /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/database/README.md
sed -n '1,220p' /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/scripts/run.sh
```

Expected: output confirms `v1.3.0`, image `ghcr.io/wodenwang/bpmt-lite:1.3.0`, default URL `http://127.0.0.1:8080/`, H5 URL `http://127.0.0.1:8080/login.jsp?_action_mode=h5`, default credentials `admin/admin`, default database `bpmt`, minimal database `bpmt_min`, and `run.sh min`.

- [ ] **Step 3: Confirm old GitBook source paths**

Run:

```bash
sed -n '1,240p' /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/SUMMARY.md
find /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook -type f -name '*.md' | sort | sed -n '1,220p'
```

Expected: output includes `5.模块视图/5.1.动态表视图.md`, `6.脚本开发/6.1.上下文介绍.md`, `6.脚本开发/6.2.内置函数/db.md`, `7.控件开发/7.1.内置控件/text.md`, and `8.用户权限/8.1.组织架构.md`.

- [ ] **Step 4: Commit no files**

Run:

```bash
git status --short
```

Expected: no implementation files have changed from this task.

### Task 2: Build Documentation Navigation

**Files:**
- Modify: `README.md`
- Modify: `AGENTS.md`
- Create: `docs/index.md`
- Create: `docs/SUMMARY.md`

- [ ] **Step 1: Update README as the repository entry**

Edit `README.md` so it has these sections in this order:

```markdown
# bpmt-doc

`bpmt-doc` 是 BPMT 的 Markdown-first 中文文档库。当前目标是让 GitHub、人类读者和 AI agent 都能直接阅读、追踪和校准文档内容。

## 从哪里开始

- 文档首页：[docs/index.md](docs/index.md)
- 完整目录：[docs/SUMMARY.md](docs/SUMMARY.md)
- 快速开始：[docs/quick-start/quick-start.md](docs/quick-start/quick-start.md)
- 迁移规则：[docs/migration/rules.md](docs/migration/rules.md)
- 旧 GitBook 迁移矩阵：[docs/migration/gitbook-migration-matrix.md](docs/migration/gitbook-migration-matrix.md)

## 资料源顺序

1. 本仓 `AGENTS.md`
2. `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/AGENTS.md`
3. `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite/README.md` 和 `docs/v1.3.0/*`
4. `bpmt-lite` 实现代码、配置、脚本和数据库文件
5. `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`

旧 GitBook 是历史参考。运行、部署、数据库和登录说明必须以当前 `bpmt-lite` 为准。

## 当前运行基线

- 当前版本：`v1.3.0`
- 默认镜像：`ghcr.io/wodenwang/bpmt-lite:1.3.0`
- 默认地址：`http://127.0.0.1:8080/`
- H5 地址：`http://127.0.0.1:8080/login.jsp?_action_mode=h5`
- 默认账号：`admin/admin`
- 默认数据库：`bpmt`
- 最小数据库：`bpmt_min`

## 文档状态

迁移文档会标记 `已校准`、`待校准` 或 `历史参考`。没有校准状态的旧内容不能当成当前事实。
```

- [ ] **Step 2: Create docs/index.md**

Create `docs/index.md` with:

```markdown
# BPMT 文档

BPMT 是 BPM + table 的低代码平台，核心能力包括动态表、工作流、模块视图、脚本函数、控件和权限体系。

本仓文档按 Markdown-first 方式组织。当前运行事实来自 `bpmt-lite v1.3.0`，旧 GitBook 作为历史资料迁移和校准。

## 快速入口

- [快速开始](quick-start/quick-start.md)
- [登录说明](quick-start/login.md)
- [数据库初始化](quick-start/database-init.md)
- [Docker 运行与维护](ops/docker-run.md)

## 核心概念

- [动态表视图](concepts/module-views/dynamic-table-view.md)

## 使用者指南

- [组织架构](user-guide/permissions/organization.md)

## 开发者指南

- [脚本上下文](developer-guide/scripts/context.md)

## API 参考

- [db 内置函数](reference/functions/db.md)
- [text 文本框控件](reference/widgets/text.md)

## 迁移治理

- [迁移规则](migration/rules.md)
- [旧 GitBook 迁移矩阵](migration/gitbook-migration-matrix.md)
```

- [ ] **Step 3: Create docs/SUMMARY.md**

Create `docs/SUMMARY.md` with:

```markdown
# BPMT 文档目录

## 入门

- [文档首页](index.md)
- [快速开始](quick-start/quick-start.md)
- [登录说明](quick-start/login.md)
- [数据库初始化](quick-start/database-init.md)

## 运行维护

- [Docker 运行与维护](ops/docker-run.md)

## 核心概念

- [动态表视图](concepts/module-views/dynamic-table-view.md)

## 使用者指南

- [组织架构](user-guide/permissions/organization.md)

## 开发者指南

- [脚本上下文](developer-guide/scripts/context.md)

## API 参考

- [db 内置函数](reference/functions/db.md)
- [text 文本框控件](reference/widgets/text.md)

## 迁移治理

- [迁移规则](migration/rules.md)
- [旧 GitBook 迁移矩阵](migration/gitbook-migration-matrix.md)
```

- [ ] **Step 4: Update AGENTS.md with current phase**

Append this section to `AGENTS.md`:

```markdown
## 当前实施计划

已确认采用 Markdown-first 方案。设计文档：

```text
docs/superpowers/specs/2026-05-01-bpmt-doc-markdown-first-design.md
```

实施计划：

```text
docs/superpowers/plans/2026-05-01-bpmt-doc-markdown-first.md
```

首批实施范围是文档导航、当前 `bpmt-lite v1.3.0` 运行路径、迁移规则、迁移矩阵和五篇样板迁移文档。不要在首批引入 GitBook、VitePress、Docusaurus 或其他站点框架。
```

- [ ] **Step 5: Verify navigation files exist**

Run:

```bash
test -f README.md
test -f AGENTS.md
test -f docs/index.md
test -f docs/SUMMARY.md
rg -n "quick-start/quick-start.md|migration/gitbook-migration-matrix.md|Markdown-first" README.md docs/index.md docs/SUMMARY.md AGENTS.md
```

Expected: all `test` commands exit 0 and `rg` prints matches from all four files.

- [ ] **Step 6: Commit navigation**

Run:

```bash
git add README.md AGENTS.md docs/index.md docs/SUMMARY.md
git commit -m "docs: add markdown navigation"
```

Expected: commit succeeds with the four navigation files.

### Task 3: Write Current bpmt-lite Run Path

**Files:**
- Create: `docs/quick-start/quick-start.md`
- Create: `docs/quick-start/login.md`
- Create: `docs/quick-start/database-init.md`
- Create: `docs/ops/docker-run.md`

- [ ] **Step 1: Create directory structure**

Run:

```bash
mkdir -p docs/quick-start docs/ops
```

Expected: directories exist.

- [ ] **Step 2: Create docs/quick-start/quick-start.md**

Create `docs/quick-start/quick-start.md` with:

```markdown
# 快速开始

本文按 `bpmt-lite v1.3.0` 编写。旧 GitBook 的安装说明不适用于当前 Docker 化发行路径。

## 最小库快速体验

不需要 clone 项目。准备一个空目录，执行：

```bash
mkdir -p bpmt-lite && cd bpmt-lite
curl -fsSL https://raw.githubusercontent.com/wodenwang/bpmt-lite/v1.3.0/scripts/run.sh -o run.sh
sh run.sh min
```

访问：

```text
http://127.0.0.1:8080/
```

H5 登录入口：

```text
http://127.0.0.1:8080/login.jsp?_action_mode=h5
```

默认账号：

```text
用户名：admin
密码：admin
```

最小库数据库名是 `bpmt_min`，包含约 173 张表，适合快速体验、自动化验收和 issue 复现。

## 完整库启动

如果要使用完整业务库，执行：

```bash
mkdir -p bpmt-lite && cd bpmt-lite
curl -fsSL https://raw.githubusercontent.com/wodenwang/bpmt-lite/v1.3.0/scripts/run.sh -o run.sh
sh run.sh
```

完整库数据库名是 `bpmt`，包含约 377 张表。

## 验证入口

```bash
curl -fsSI http://127.0.0.1:8080/
curl -fsSI http://127.0.0.1:8080/ueditor/
```

期望返回 `HTTP/1.1 200`。

## 重新初始化数据库

MariaDB 官方镜像只会在首次创建 `db/data` 时自动导入 `db/init/*.sql`。如果已经启动过，再替换初始化 SQL 不会自动重新导入。

确认数据已备份后执行：

```bash
docker compose down
rm -rf db/data
docker compose up -d
```
```

- [ ] **Step 3: Create docs/quick-start/login.md**

Create `docs/quick-start/login.md` with:

```markdown
# 登录说明

本文按 `bpmt-lite v1.3.0` 编写。

## Web 入口

```text
http://127.0.0.1:8080/
```

## H5 入口

```text
http://127.0.0.1:8080/login.jsp?_action_mode=h5
```

`v1.3.0` 已将登录、首页、菜单、首页面板，以及流程、动态表、报表的核心浏览路径纳入移动端验收范围。

## 默认账号

```text
用户名：admin
密码：admin
```

默认账号来自当前初始化数据库。更换数据库或使用自定义 SQL 后，账号状态以导入数据为准。
```

- [ ] **Step 4: Create docs/quick-start/database-init.md**

Create `docs/quick-start/database-init.md` with:

```markdown
# 数据库初始化

本文按 `bpmt-lite v1.3.0` 编写。

## 数据库选择

| 数据库 | SQL 文件 | 用途 |
| --- | --- | --- |
| `bpmt` | `db/init/bpmt.sql` | 完整业务数据，由 `database/bpmt.sql.gz` 解压生成 |
| `bpmt_min` | `db/init/bpmt-min.sql` | 最小数据，由 `database/bpmt-min.sql.gz` 解压生成 |

`bpmt` 和 `bpmt_min` 可以共存在同一个 MariaDB 容器里，互不覆盖。Web 应用连接哪个库由 `DB_NAME` 决定。

## 生成初始化 SQL

在 `bpmt-lite` 仓库内可以执行：

```bash
scripts/init-db.sh
scripts/init-db.sh min
```

`scripts/run.sh` 会在远程快速启动场景中自动下载 compose、下载初始化脚本、解压 SQL 并启动服务。

## 切换数据库

切到最小库：

```bash
DB_NAME=bpmt_min docker compose up -d web
```

切回完整库：

```bash
DB_NAME=bpmt docker compose up -d web
```

## 首次导入规则

MariaDB 官方镜像只会在首次创建 `db/data` 时自动执行 `db/init/*.sql`。已经启动过的运行目录需要删除 `db/data` 才会重新导入。
```

- [ ] **Step 5: Create docs/ops/docker-run.md**

Create `docs/ops/docker-run.md` with:

```markdown
# Docker 运行与维护

本文按 `bpmt-lite v1.3.0` 编写。

## 默认镜像

```text
ghcr.io/wodenwang/bpmt-lite:1.3.0
```

## 常用命令

查看容器状态：

```bash
docker compose ps
```

停止服务：

```bash
docker compose down
```

检查入口：

```bash
curl -fsSI http://127.0.0.1:8080/
curl -fsSI http://127.0.0.1:8080/ueditor/
```

## 常用环境变量

| 配置 | 默认值 | 说明 |
| --- | --- | --- |
| `BPMT_HTTP_PORT` | `8080` | Web 访问端口 |
| `BPMT_DB_PORT` | `3306` | MariaDB 暴露到宿主机的端口 |
| `BPMT_IMAGE_TAG` | `1.3.0` | Web 镜像 tag |
| `DB_HOST` | `mariadb` | Web 容器访问数据库的主机名 |
| `DB_NAME` | `bpmt` | Web 应用连接的数据库 |
| `DB_USER` | `root` | 数据库用户 |
| `DB_PASSWORD` | `123456` | 数据库密码 |
| `LOG_PATH` | `/usr/local/tomcat/webapps/logs` | 容器内 BPMT 业务日志目录 |

## 运行目录

```text
db/init/                 初始化 SQL 目录，不提交私有 SQL
db/data/                 MariaDB 数据目录，不提交 git
db/logs/                 MariaDB 日志目录，不提交 git
runtime/attachment/      BPMT 附件目录，不提交 git
runtime/download/        BPMT 下载目录，不提交 git
runtime/ueditor-upload/  UEditor 上传目录，不提交 git
runtime/platform-logs/   BPMT 平台日志目录，不提交 git
runtime/tomcat-logs/     Tomcat 日志目录，不提交 git
config/overrides/        properties 覆盖文件目录，不提交具体覆盖文件
```

## 配置覆盖

高级配置通过 `config/overrides/*.properties` 覆盖。覆盖文件会追加到容器启动时生成的同名 properties 文件后面，因此同名 key 以覆盖文件为准。
```

- [ ] **Step 6: Verify current run docs**

Run:

```bash
rg -n "v1\\.3\\.0|run\\.sh min|admin|bpmt_min|ghcr\\.io/wodenwang/bpmt-lite:1\\.3\\.0" docs/quick-start docs/ops
rg -n "旧 GitBook" docs/quick-start docs/ops
```

Expected: first command prints matches in all four docs; second command prints matches in `docs/quick-start/quick-start.md` only.

- [ ] **Step 7: Commit current run docs**

Run:

```bash
git add docs/quick-start docs/ops
git commit -m "docs: document bpmt-lite quick start"
```

Expected: commit succeeds.

### Task 4: Add Migration Governance

**Files:**
- Create: `docs/migration/rules.md`
- Create: `docs/migration/gitbook-migration-matrix.md`

- [ ] **Step 1: Create migration directory**

Run:

```bash
mkdir -p docs/migration
```

Expected: directory exists.

- [ ] **Step 2: Create docs/migration/rules.md**

Create `docs/migration/rules.md` with:

```markdown
# 旧 GitBook 迁移规则

## 事实源顺序

1. 本仓 `AGENTS.md`
2. `bpmt-lite/AGENTS.md`
3. `bpmt-lite/README.md`、`docs/v1.3.0/*`、`docs/v1.2.0/*`、`docs/maintenance.md`
4. `bpmt-lite` 实现代码、配置、脚本和数据库文件
5. 旧 GitBook 文档目录

旧 GitBook 是历史参考，不是当前事实来源。

## 状态

| 状态 | 含义 |
| --- | --- |
| `未迁移` | 已列入矩阵，还没有进入新文档 |
| `待校准` | 已迁移正文或图片，但尚未对照 `bpmt-lite v1.3.0` 校准 |
| `已校准` | 已对照当前代码、配置、脚本、数据库或运行结果确认 |
| `历史参考` | 保留历史价值，但不作为当前能力说明 |

## Front Matter

迁移文档必须包含：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---
```

校准完成后必须记录依据：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 已校准
bpmt_lite_version: v1.3.0
last_verified: 2026-05-01
verified_against:
  - /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/platform/src/main/webapp
---
```

## 图片

旧图片复制到 `docs/assets/legacy-gitbook/<旧章节目录>/`。正文图片链接使用相对路径。

## 当前运行类文档

快速开始、安装部署、数据库初始化、默认账号、Docker、配置覆盖、日志目录和维护者构建不能直接搬旧 GitBook，必须按 `bpmt-lite v1.3.0` 重写。
```

- [ ] **Step 3: Create docs/migration/gitbook-migration-matrix.md**

Create `docs/migration/gitbook-migration-matrix.md` with:

```markdown
# 旧 GitBook 迁移矩阵

| 旧路径 | 新路径 | 处理类型 | 状态 | 是否含图片 | 校准依据 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| `1.开始使用/1.1.快速安装.md` | `docs/quick-start/quick-start.md` | 重写 | 已校准 | 是 | `bpmt-lite/README.md`, `bpmt-lite/scripts/run.sh` | 旧安装路径不进入当前主文档 |
| `1.开始使用/1.2.案例1_企业管理.md` | `docs/user-guide/examples/onboarding-approval.md` | 迁移后校准 | 未迁移 | 是 | 待对照完整库 UI | 后续批次处理 |
| `1.开始使用/1.2.案例2_微信.md` | `docs/migration/legacy/wechat-example.md` | 历史参考 | 未迁移 | 是 | 待验证 | 首批不作为当前能力 |
| `2.数据库设计/2.数据库设计.md` | `docs/concepts/database-design.md` | 迁移后校准 | 未迁移 | 是 | 待对照数据库脚本 | 后续批次处理 |
| `3.工作流设计/3.工作流设计.md` | `docs/concepts/workflow-design.md` | 迁移后校准 | 未迁移 | 是 | 待对照 Activiti 与平台流程模块 | 后续批次处理 |
| `4.微信开发/README.md` | `docs/migration/legacy/wechat/README.md` | 历史参考 | 未迁移 | 否 | 待验证 | 首批不作为当前能力 |
| `5.模块视图/5.1.动态表视图.md` | `docs/concepts/module-views/dynamic-table-view.md` | 迁移后校准 | 待迁移 | 是 | 待对照当前 UI 和代码 | 首批样板 |
| `5.模块视图/5.2.工作流视图.md` | `docs/concepts/module-views/workflow-view.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.报表视图.md` | `docs/concepts/module-views/report-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.模板开发视图.md` | `docs/developer-guide/templates/template-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.处理器视图.md` | `docs/developer-guide/handlers/handler-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.公告视图.md` | `docs/user-guide/module-views/announcement-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `6.脚本开发/6.1.上下文介绍.md` | `docs/developer-guide/scripts/context.md` | 迁移后校准 | 待迁移 | 是 | 待对照脚本运行上下文 | 首批样板 |
| `6.脚本开发/6.2.内置函数/db.md` | `docs/reference/functions/db.md` | 迁移后校准 | 待迁移 | 是 | 待对照函数实现 | 首批样板 |
| `7.控件开发/7.1.内置控件/text.md` | `docs/reference/widgets/text.md` | 迁移后校准 | 待迁移 | 是 | 待对照控件实现 | 首批样板 |
| `8.用户权限/8.1.组织架构.md` | `docs/user-guide/permissions/organization.md` | 迁移后校准 | 待迁移 | 是 | 待对照权限 UI 和数据 | 首批样板 |
| `8.用户权限/8.2.权限组.md` | `docs/user-guide/permissions/permission-groups.md` | 迁移后校准 | 未迁移 | 是 | 待对照权限 UI 和数据 | 后续批次处理 |
| `9.其他设置/9.1.界面风格.md` | `docs/user-guide/settings/ui-theme.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI | 后续批次处理 |
| `9.其他设置/9.2.功能域和菜单.md` | `docs/user-guide/settings/menu.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI | 后续批次处理 |
| `9.其他设置/9.3.系统字典.md` | `docs/user-guide/settings/dictionary.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI 和数据 | 后续批次处理 |
| `10.安装部署/10.安装部署.md` | `docs/ops/docker-run.md` | 重写 | 已校准 | 是 | `bpmt-lite/README.md`, `bpmt-lite/docker-compose.yml` | 旧 Tomcat/JDK 部署不进入当前主路径 |
| `10.安装部署/10.2.注册与更新.md` | `docs/migration/legacy/registration-update.md` | 历史参考 | 未迁移 | 是 | 待验证 | 首批不作为当前能力 |
| `99.最佳实践/README.md` | `docs/migration/legacy/best-practices/README.md` | 历史参考 | 未迁移 | 否 | 待验证 | 后续批次处理 |
```

- [ ] **Step 4: Verify migration governance**

Run:

```bash
rg -n "待校准|已校准|历史参考|source_path|Front Matter" docs/migration/rules.md docs/migration/gitbook-migration-matrix.md
rg -n "5\\.模块视图/5\\.1\\.动态表视图\\.md|7\\.控件开发/7\\.1\\.内置控件/text\\.md|10\\.安装部署/10\\.安装部署\\.md" docs/migration/gitbook-migration-matrix.md
```

Expected: output includes all migration statuses and the three representative source paths.

- [ ] **Step 5: Commit migration governance**

Run:

```bash
git add docs/migration
git commit -m "docs: add gitbook migration governance"
```

Expected: commit succeeds.

### Task 5: Migrate Sample Pages and Images

**Files:**
- Create: `docs/concepts/module-views/dynamic-table-view.md`
- Create: `docs/developer-guide/scripts/context.md`
- Create: `docs/reference/functions/db.md`
- Create: `docs/reference/widgets/text.md`
- Create: `docs/user-guide/permissions/organization.md`
- Create: `docs/assets/legacy-gitbook/5-module-views/`
- Create: `docs/assets/legacy-gitbook/6-scripts/`
- Create: `docs/assets/legacy-gitbook/7-widgets/`
- Create: `docs/assets/legacy-gitbook/8-permissions/`
- Modify: `docs/migration/gitbook-migration-matrix.md`

- [ ] **Step 1: Create target directories**

Run:

```bash
mkdir -p docs/concepts/module-views docs/developer-guide/scripts docs/reference/functions docs/reference/widgets docs/user-guide/permissions
mkdir -p docs/assets/legacy-gitbook/5-module-views docs/assets/legacy-gitbook/6-scripts docs/assets/legacy-gitbook/7-widgets docs/assets/legacy-gitbook/8-permissions
```

Expected: directories exist.

- [ ] **Step 2: Copy sample images**

Run:

```bash
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/5.模块视图/5.1_demo*.png docs/assets/legacy-gitbook/5-module-views/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/6.脚本开发/6.1.context.demo_*.png docs/assets/legacy-gitbook/6-scripts/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/6.脚本开发/6.2.内置函数/db_demo*.png docs/assets/legacy-gitbook/6-scripts/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/6.脚本开发/6.2.内置函数/db_query2.png docs/assets/legacy-gitbook/6-scripts/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/7.控件开发/7.1.内置控件/7.1.text1.png docs/assets/legacy-gitbook/7-widgets/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/7.控件开发/7.1.内置控件/7.1.text2.png docs/assets/legacy-gitbook/7-widgets/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/7.控件开发/7.1.内置控件/7.1.text3.png docs/assets/legacy-gitbook/7-widgets/
cp /Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook/8.用户权限/8.1_demo_* docs/assets/legacy-gitbook/8-permissions/
```

Expected: commands copy images into `docs/assets/legacy-gitbook/`.

- [ ] **Step 3: Create dynamic table view sample**

Create `docs/concepts/module-views/dynamic-table-view.md` by copying the useful body from `5.模块视图/5.1.动态表视图.md`, adding this front matter, and rewriting the five image links to `../../assets/legacy-gitbook/5-module-views/5.1_demo1.png` through `../../assets/legacy-gitbook/5-module-views/5.1_demo5.png`:

```markdown
---
source: 旧 GitBook
source_path: 5.模块视图/5.1.动态表视图.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# 动态表视图

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 当前 UI 和代码校准。
```

Expected body content includes the definition of dynamic table views and the old creation flow.

- [ ] **Step 4: Create script context sample**

Create `docs/developer-guide/scripts/context.md` by copying the useful body from `6.脚本开发/6.1.上下文介绍.md`, adding this front matter, and rewriting image links to `../../assets/legacy-gitbook/6-scripts/6.1.context.demo_1.png`, `../../assets/legacy-gitbook/6-scripts/6.1.context.demo_2.png`, and `../../assets/legacy-gitbook/6-scripts/6.1.context.demo_3.png`:

```markdown
---
source: 旧 GitBook
source_path: 6.脚本开发/6.1.上下文介绍.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# 脚本上下文

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 脚本运行上下文校准。
```

Expected body content includes the old context object explanation.

- [ ] **Step 5: Create db function sample**

Create `docs/reference/functions/db.md` by copying the useful body from `6.脚本开发/6.2.内置函数/db.md`, adding this front matter, and rewriting image links to `../../assets/legacy-gitbook/6-scripts/db_demo1.png` through `../../assets/legacy-gitbook/6-scripts/db_demo8.png`, plus `../../assets/legacy-gitbook/6-scripts/db_query2.png`:

```markdown
---
source: 旧 GitBook
source_path: 6.脚本开发/6.2.内置函数/db.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# db 通用函数库

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 函数实现校准。
```

Expected body content includes `db.find`, `db.query`, `db.exec`, `db.findByPk`, `db.save`, `db.update`, and `db.delete`.

- [ ] **Step 6: Create text widget sample**

Create `docs/reference/widgets/text.md` by copying the useful body from `7.控件开发/7.1.内置控件/text.md`, adding this front matter, and rewriting image links to `../../assets/legacy-gitbook/7-widgets/7.1.text1.png`, `../../assets/legacy-gitbook/7-widgets/7.1.text2.png`, and `../../assets/legacy-gitbook/7-widgets/7.1.text3.png`:

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# text 文本框

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 控件实现校准。
```

Expected body content includes the `参数API` table and `Widget.init`, `Widget.enabled`, `Widget.disabled`, `Widget.val`, `Widget.change`.

- [ ] **Step 7: Create organization sample**

Create `docs/user-guide/permissions/organization.md` by copying the useful body from `8.用户权限/8.1.组织架构.md`, adding this front matter, and rewriting image links to `../../assets/legacy-gitbook/8-permissions/8.1_demo_1.jpg` and `../../assets/legacy-gitbook/8-permissions/8.1_demo_2.png` through `../../assets/legacy-gitbook/8-permissions/8.1_demo_11.png`:

```markdown
---
source: 旧 GitBook
source_path: 8.用户权限/8.1.组织架构.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# 组织架构

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 权限 UI 和数据校准。
```

Expected body content includes organization, department, and user management explanations from the old page.

- [ ] **Step 8: Update matrix statuses for migrated samples**

In `docs/migration/gitbook-migration-matrix.md`, update the five first-batch sample rows from `待迁移` to `待校准`:

```text
5.模块视图/5.1.动态表视图.md
6.脚本开发/6.1.上下文介绍.md
6.脚本开发/6.2.内置函数/db.md
7.控件开发/7.1.内置控件/text.md
8.用户权限/8.1.组织架构.md
```

- [ ] **Step 9: Verify sample migration**

Run:

```bash
rg -n "source_path:|status: 待校准|迁移状态" docs/concepts/module-views/dynamic-table-view.md docs/developer-guide/scripts/context.md docs/reference/functions/db.md docs/reference/widgets/text.md docs/user-guide/permissions/organization.md
rg -n "!\\[\\]\\(\\.\\./\\.\\./assets/legacy-gitbook/" docs/concepts/module-views/dynamic-table-view.md docs/developer-guide/scripts/context.md docs/reference/functions/db.md docs/reference/widgets/text.md docs/user-guide/permissions/organization.md
find docs/assets/legacy-gitbook -type f | sort | sed -n '1,120p'
```

Expected: first command prints source and status from all five docs, second command prints image links from migrated docs with images, third command lists copied image files.

- [ ] **Step 10: Commit sample migration**

Run:

```bash
git add docs/concepts docs/developer-guide docs/reference docs/user-guide docs/assets docs/migration/gitbook-migration-matrix.md
git commit -m "docs: migrate initial gitbook samples"
```

Expected: commit succeeds.

### Task 6: Final Validation and Handoff

**Files:**
- Read: all changed Markdown files.
- Modify: `AGENTS.md` only if validation finds a stale phase note.

- [ ] **Step 1: Check Markdown link targets**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
root = Path('.')
missing = []
for path in root.rglob('*.md'):
    if path.parts[:2] == ('docs', 'superpowers'):
        continue
    text = path.read_text(encoding='utf-8')
    for target in re.findall(r'\[[^\]]+\]\(([^)]+)\)', text):
        if target.startswith(('http://', 'https://', '#', 'mailto:')):
            continue
        clean = target.split('#', 1)[0]
        if not clean:
            continue
        resolved = (path.parent / clean).resolve()
        if not resolved.exists():
            missing.append((str(path), target))
    for target in re.findall(r'!\[[^\]]*\]\(([^)]+)\)', text):
        if target.startswith(('http://', 'https://')):
            continue
        clean = target.split('#', 1)[0]
        resolved = (path.parent / clean).resolve()
        if not resolved.exists():
            missing.append((str(path), target))
if missing:
    for path, target in missing:
        print(f'{path}: missing {target}')
    sys.exit(1)
print('all markdown links resolve')
PY
```

Expected: `all markdown links resolve`.

- [ ] **Step 2: Check old GitBook paths are not used as live image paths**

Run:

```bash
rg -n "!\\[[^]]*\\]\\([^)]*(1\\.开始使用|5\\.模块视图|6\\.脚本开发|7\\.控件开发|8\\.用户权限|运行时参考/gitbook)" docs README.md AGENTS.md || true
```

Expected: no output.

- [ ] **Step 3: Check current facts are represented**

Run:

```bash
rg -n "v1\\.3\\.0|ghcr\\.io/wodenwang/bpmt-lite:1\\.3\\.0|http://127\\.0\\.0\\.1:8080/|login\\.jsp\\?_action_mode=h5|admin/admin|bpmt_min" README.md docs AGENTS.md
```

Expected: output includes matches in `README.md`, `docs/quick-start/quick-start.md`, `docs/quick-start/login.md`, `docs/quick-start/database-init.md`, and `docs/ops/docker-run.md`.

- [ ] **Step 4: Check migration status coverage**

Run:

```bash
rg -n "状态 \\| 含义|待校准|已校准|历史参考|未迁移" docs/migration docs/concepts docs/developer-guide docs/reference docs/user-guide
```

Expected: output includes status definitions in `docs/migration/rules.md`, matrix rows in `docs/migration/gitbook-migration-matrix.md`, and front matter in the five migrated sample docs.

- [ ] **Step 5: Review git history and working tree**

Run:

```bash
git log --oneline -5
git status --short
```

Expected: latest commits include navigation, quick start, migration governance, and sample migration commits. Working tree is clean.

- [ ] **Step 6: Final commit if validation changed AGENTS.md**

If `AGENTS.md` was changed during validation, run:

```bash
git add AGENTS.md
git commit -m "docs: record markdown migration handoff"
```

Expected: commit succeeds. If `AGENTS.md` was not changed, no commit is needed.

## Self-Review Checklist

- Spec coverage: Tasks 2 through 6 cover navigation, current run docs, migration governance, sample migration, image handling, and validation from the approved spec.
- Placeholder scan: This plan has no placeholder tokens or unspecified implementation steps.
- Scope: This is one first-batch documentation implementation plan, not a full GitBook migration.
- Type and path consistency: All planned paths live under `bpmt-doc`; source reads point to `bpmt-lite` or the old GitBook only.
