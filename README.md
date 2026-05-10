# bpmt-doc

`bpmt-doc` 是 BPMT 的 Markdown-first 中文文档库。当前文档结构直接沿用旧 GitBook 章节层级，并用 `bpmt-lite v1.6.2` 校准快速启动、数据库、登录、外部 API 和 OAuth 第三方登录说明。

## 从哪里开始

- 完整目录：[docs/SUMMARY.md](docs/SUMMARY.md)
- 当前快速启动：[docs/1.开始使用/1.1.快速安装.md](docs/1.开始使用/1.1.快速安装.md)
- 外部 API：[docs/10.外部API/README.md](docs/10.外部API/README.md)
- OAuth 第三方登录：[docs/11.OAuth第三方登录/README.md](docs/11.OAuth第三方登录/README.md)
- 其他工具：[docs/9.其他设置/9.4.其他工具.md](docs/9.其他设置/9.4.其他工具.md)

## 当前运行基线

- 当前版本：`v1.6.2`
- 默认 Web 镜像：`ghcr.io/wodenwang/bpmt-lite:1.6.2`
- 默认 API 镜像：`ghcr.io/wodenwang/bpmt-lite-api:1.6.2`
- 默认地址：`http://127.0.0.1/`
- API 文档：`http://127.0.0.1/api/docs/`
- OpenAPI：`http://127.0.0.1/api/openapi.json`
- 默认账号：`admin/admin`
- 默认数据库：`bpmt`
- 最小数据库：`bpmt_min`
- 升级入口：运行目录内执行 `sh ./upgrade.sh`

## 文档结构

`docs/` 下只保留旧 GitBook 章节结构、`SUMMARY.md` 和统一图片目录 `docs/assets/gitbook/`。`安装部署` 与 `最佳实践` 两章已移除，原 `安装部署/其他工具` 内容迁入 `其他设置`。
