# AGENTS.md

## 作用范围

本文件是 `bpmt-doc` 仓库的 Codex 本地记忆入口。
后续 agent 在本仓做 BPMT 文档整理、旧 GitBook 迁移、`bpmt-lite` 代码解读、运行验证或发布说明更新时，必须先读本文件。

## 项目定位

- 仓库：`bpmt-doc`
- 远程：`https://github.com/wodenwang/bpmt-doc.git`
- 目标：建立 BPMT 的完整中文文档体系。
- 主资料源：`/Users/wenzhewang/workspace/bpmt_project/bpmt-lite`
- 旧文档参考：`/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`
- 当前阶段：空仓初始化，先建立项目记忆、资料源约定和文档工作台。

## Source Of Truth 顺序

1. 本仓 `AGENTS.md`
2. `bpmt-lite` 仓库的 `AGENTS.md`
3. `bpmt-lite` 仓库的 `README.md`、`docs/v1.3.0/*`、`docs/v1.2.0/*`、`docs/maintenance.md`
4. `bpmt-lite` 实现代码、配置、脚本和数据库文件
5. 旧 GitBook 文档目录

旧 GitBook 是历史参考，不是当前事实来源。凡是旧文档与 `bpmt-lite` 当前代码、README、Docker 配置、数据库脚本不一致，以 `bpmt-lite` 当前仓库为准。

## 关键本地路径

```text
/Users/wenzhewang/workspace/bpmt_project/bpmt-doc
/Users/wenzhewang/workspace/bpmt_project/bpmt-lite
/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook
```

## bpmt-lite 当前已知基线

截至本仓初始化时，`bpmt-lite` 的仓库记忆与 README 显示：

- 当前发布版本：`v1.3.0`
- 默认镜像：`ghcr.io/wodenwang/bpmt-lite:1.3.0`
- 默认访问地址：`http://127.0.0.1:8080/`
- H5 登录入口：`http://127.0.0.1:8080/login.jsp?_action_mode=h5`
- 默认登录账号：`admin/admin`
- 默认数据库：`bpmt`
- 最小数据库：`bpmt_min`
- 最小库初始化后约 173 张表
- 完整库初始化后约 377 张表
- 技术栈：Java 8、Maven 3、Tomcat 7、MariaDB

这些信息会随 `bpmt-lite` 后续版本变化。每次更新本文档前，应先重新读取 `bpmt-lite/AGENTS.md` 和 `bpmt-lite/README.md`。

## 旧 GitBook 初始目录

旧文档位于 `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`，当前可见结构包括：

- 开始使用
- 数据库设计
- 工作流设计
- 微信开发
- 模块视图
- 脚本开发
- 控件开发
- 用户权限
- 其他设置
- 安装部署
- 最佳实践

迁移时不要机械搬运。应先标注旧文档状态，再用 `bpmt-lite` 当前代码和运行结果校准内容。

## 文档编写规则

- 本仓文档统一使用简体中文。
- 命令、路径、类名、配置键、镜像名、Maven 坐标保持原样。
- 初学者路径优先：先给最短可运行步骤，再给维护者细节。
- 涉及运行、安装、数据库、登录、Docker 的说明，必须与 `bpmt-lite` 当前版本一致。
- 从旧 GitBook 迁移的内容必须标记“已校准”或“待校准”，不要让历史说明伪装成当前事实。
- 需要引用代码行为时，优先给出 `bpmt-lite` 中的实际文件路径和结论。

## 推荐工作流

1. 读取本文件。
2. 读取 `bpmt-lite/AGENTS.md` 与 `bpmt-lite/README.md`。
3. 针对当前主题搜索 `bpmt-lite` 代码和配置。
4. 对照旧 GitBook 同主题内容。
5. 写入或更新本仓文档。
6. 如涉及可运行流程，执行最小验证并记录验证命令和结果。

## 初始化后首批任务

- 建立文档站技术选型和目录结构。
- 梳理旧 GitBook 章节迁移矩阵。
- 先完成 Quick Start、运行部署、数据库初始化、账号登录这几块当前用户最需要的文档。
- 再逐步解读工作流、动态表、表单控件、脚本函数、权限体系等核心模块。
