# bpmt-doc

`bpmt-doc` 用于建设 BPMT 的完整中文文档。文档内容需要持续对照 `bpmt-lite` 当前代码、配置、运行脚本和数据库初始化文件，而不是只迁移旧 GitBook。

## 资料源

当前约定：

| 类型 | 路径 |
| --- | --- |
| 文档仓库 | `/Users/wenzhewang/workspace/bpmt_project/bpmt-doc` |
| BPMT 当前代码 | `/Users/wenzhewang/workspace/bpmt_project/bpmt-lite` |
| 旧 GitBook 参考 | `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook` |

远程仓库：

```text
https://github.com/wodenwang/bpmt-doc.git
```

## 当前初始化状态

本仓刚从空仓初始化，已先建立：

- `AGENTS.md`：Codex 本地记忆入口和协作规则。
- `docs/project-memory.md`：项目背景、资料源、当前基线。
- `docs/source-inventory.md`：旧 GitBook 与 `bpmt-lite` 的初始资料清单。
- `docs/workbench/README.md`：后续文档解读和迁移工作台。

## 工作原则

1. 先读 `AGENTS.md`。
2. 再读 `bpmt-lite/AGENTS.md` 和 `bpmt-lite/README.md`。
3. 旧 GitBook 只作为历史材料。
4. 文档中的运行、安装、数据库、登录、Docker 内容必须以当前 `bpmt-lite` 为准。
5. 每个迁移章节都要标记校准状态，避免把过期说明当成当前事实。

## 下一步建议

优先建设这些章节：

- 快速开始：Docker 一键启动、访问地址、默认账号。
- 安装部署：运行目录、数据库初始化、常用配置。
- 数据库：完整库和最小库的来源、表数量、初始化机制。
- 系统使用：动态表、工作流、模块视图、权限体系。
- 二次开发：脚本函数、控件开发、处理器扩展。
