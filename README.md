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
