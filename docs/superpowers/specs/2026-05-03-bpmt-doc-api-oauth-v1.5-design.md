# bpmt-doc v1.5.0 API 与 OAuth 文档更新设计

## 背景

`bpmt-doc` 当前公共说明仍以 `bpmt-lite v1.3.0` 为运行基线，但 `bpmt-lite` 已发布到 `v1.5.0`。从 `v1.3.*` 到 `v1.5.*` 的主要新增能力有两块：

- `v1.4.1` 外部 API：独立 `api` 容器、nginx 单入口、HMAC 业务接口、动态表结构管理、数据库操作接口。
- `v1.5.0` 外部系统 OAuth 登录：BPMT Web 作为 OAuth2 Authorization Code 服务端，第三方系统可复用 BPMT 用户登录和权限体系。

本次更新目标是把这两块能力补进 `bpmt-doc`，同时把公共运行基线从 `v1.3.0` 校准到 `v1.5.0`。

## 目标读者

- BPMT 低代码用户：需要知道如何启用、配置和使用新能力。
- 第三方系统接入者：需要知道 API/OAuth 的入口、参数、鉴权方式和错误处理。
- BPMT 维护者：需要知道本仓文档与 `bpmt-lite` 当前发布事实如何对齐。

OAuth 章节优先面向低代码用户，不展开底层表结构或实现类。底层实现只在必要处一句带过，避免把用户文档写成开发者源码说明。

## Source Of Truth

本次更新以当前本机 `bpmt-lite` 仓库为事实来源，优先级如下：

1. `bpmt-doc/AGENTS.md`
2. `bpmt-lite/AGENTS.md`
3. `bpmt-lite/README.md`
4. `bpmt-lite/docs/v1.4.1/api-reference.md`
5. `bpmt-lite/docs/v1.4.1/openapi.json`
6. `bpmt-lite/docs/v1.5.0/oauth-login-reference.md`
7. `bpmt-lite` 实现代码、Docker 配置、数据库脚本

旧 GitBook 只作为历史章节结构参考，不作为 API/OAuth 事实来源。

## 文档结构

采用新增顶级章节的方式，不把新能力塞进旧 GitBook 原章节中：

```text
docs/
  10.外部API/
    README.md
    openapi.json
  11.OAuth第三方登录/
    README.md
```

同步更新：

- `docs/SUMMARY.md`
- `README.md`
- `AGENTS.md`
- `docs/1.开始使用/1.1.快速安装.md`

## API 章节设计

`docs/10.外部API/README.md` 是独立可读文档，不要求读者跳转到 `bpmt-lite` 仓库。

内容结构：

1. 能力范围
   - API 能力沿用 `v1.4.1`，在 `v1.5.0` 中继续可用。
   - 覆盖动态表结构管理和 `database-operations`。
   - 明确不包含动态表删除、动态表业务数据 CRUD、OAuth 登录。
2. 接入入口
   - 默认 Web 文档：`http://127.0.0.1/api/docs/`
   - 默认 OpenAPI：`http://127.0.0.1/api/openapi.json`
   - 本仓快照：`docs/10.外部API/openapi.json`
3. HMAC 鉴权
   - 请求头：`X-BPMT-App-Key`、`X-BPMT-Timestamp`、`X-BPMT-Nonce`、`X-BPMT-Signature`
   - 签名原文：`METHOD`、`PATH`、`NORMALIZED_QUERY`、`TIMESTAMP`、`NONCE`、`SHA256_HEX(BODY)`
   - `PATH` 必须包含公开 context path，例如 `/api/v1/dynamic-tables`
   - 本地默认 `appKey/appSecret` 和正式部署必须覆盖默认密钥
4. 通用响应和错误模型
   - 成功响应使用 `success/data/error`
   - 错误响应包含稳定 `error.code` 和 `requestId`
   - HTTP 状态和常见错误处理建议
5. 接口详表
   - `GET /api/v1/dynamic-tables`
   - `POST /api/v1/dynamic-tables`
   - `GET /api/v1/dynamic-tables/{name}`
   - `PUT /api/v1/dynamic-tables/{name}`
   - `POST /api/v1/dynamic-tables/{name}/ddl:sync`
   - `GET /api/v1/dynamic-tables/templates`
   - `GET /api/v1/dynamic-tables/templates/{templateCode}`
   - `POST /api/v1/dynamic-tables/templates/{templateCode}:create-table`
   - `POST /api/v1/database-operations/query`
   - `POST /api/v1/database-operations/find`
   - `POST /api/v1/database-operations/save`
   - `POST /api/v1/database-operations/exec`
6. 可复制 `curl` 签名示例
7. AI agent 和集成平台注意事项
   - 优先读取本仓 `openapi.json`
   - 写接口会执行 DDL
   - SQL 写接口可通过 `BPMT_API_DBOPS_EXECUTE_ENABLED=false` 关闭

`docs/10.外部API/openapi.json` 从 `bpmt-lite/docs/v1.4.1/openapi.json` 复制为独立快照，并做 JSON 解析验证。

## OAuth 章节设计

`docs/11.OAuth第三方登录/README.md` 面向低代码用户和第三方系统接入者，重点解释“怎么配置、怎么接入、出错怎么办”。

内容结构：

1. 总体定位
   - BPMT 可作为第三方系统统一登录入口。
   - 本能力是 OAuth2 授权码登录。
   - 不重点展开 OIDC、底层表结构或实现类。
2. 管理员配置
   - 后台入口：`系统开发 -> 第三方系统`
   - 权限入口：`权限组管理 -> 第三方系统权限`
   - 配置项：`client_id`、回调地址、首页地址、权限点、启停状态
   - `clientSecret` 只展示一次，丢失后需要重置
3. 登录流程图
   - 使用 Mermaid `sequenceDiagram`
   - 说明第三方系统跳转 BPMT `/oauth/authorize`
   - 未登录时进入 BPMT 登录页
   - 登录成功后回到授权流程
   - BPMT 回跳第三方系统并携带 `code`
   - 第三方系统用 `code` 换取 `access_token`
   - 第三方系统用 token 读取用户信息
4. 鉴权情况流程图
   - 使用 Mermaid `flowchart`
   - 覆盖未登录、回调地址不匹配、用户无权限、授权码过期或重复使用、token 过期或撤销
5. 端点与参数
   - `GET /oauth/authorize`
   - `POST /oauth/token`
   - `GET /oauth/userinfo`
   - 写清必填参数、成功响应和示例
6. 错误码和应对建议
   - `invalid_request`
   - `invalid_client`
   - `invalid_grant`
   - `invalid_token`
   - `unsupported_grant_type`
   - `access_denied`
   - 每个错误码给出“用户看到什么 / 第三方系统怎么处理 / BPMT 管理员检查哪里”
7. 安全提醒
   - 密钥不要泄露
   - 回调地址要固定并精确匹配
   - 日志不要记录明文 `code`、`access_token`、`client_secret`、`password`
8. 边界说明
   - 菜单 iframe 不是 OAuth 登录主流程
   - 当前没有完善 demo，本章先使用流程图，不放真实截图

OAuth 运行数据由 BPMT 自动保存，普通低代码用户不需要直接维护数据库表。

## v1.5.0 基线校准

同步更新 `bpmt-doc` 的公共运行事实：

- 当前版本：`v1.5.0`
- 默认 Web 镜像：`ghcr.io/wodenwang/bpmt-lite:1.5.0`
- 默认 API 镜像：`ghcr.io/wodenwang/bpmt-lite-api:1.5.0`
- 默认访问地址：`http://127.0.0.1/`
- API 文档：`http://127.0.0.1/api/docs/`
- OpenAPI：`http://127.0.0.1/api/openapi.json`
- 默认账号：`admin/admin`
- 默认数据库：`bpmt`
- 最小数据库：`bpmt_min`
- 最小库初始化后约 176 张表
- 完整库初始化后约 380 张表

`docs/1.开始使用/1.1.快速安装.md` 改为 `v1.5.0` one-liner 安装路径：

```bash
curl -fsSL https://github.com/wodenwang/bpmt-lite/raw/refs/tags/v1.5.0/scripts/install.sh | bash
```

完整库路径使用：

```bash
curl -fsSL https://github.com/wodenwang/bpmt-lite/raw/refs/tags/v1.5.0/scripts/install.sh | bash -s -- full
```

## 不做范围

本次设计不包含：

- 采集真实 OAuth 后台截图。
- 搭建第三方系统 demo。
- 修改 `bpmt-lite` 代码或发布包。
- 为 OAuth 新增 OpenAPI，因为 OAuth 端点不属于 `bpmt-api` 的 HMAC 业务 API。
- 把底层 OAuth 表结构展开成开发者参考章节。

## 验证计划

实施完成后至少执行：

```bash
git diff --check
node -e "JSON.parse(require('fs').readFileSync('docs/10.外部API/openapi.json','utf8')); console.log('openapi json ok')"
rg -n "v1\\.3\\.0|:8080|bpmt-lite:1\\.3\\.0" README.md AGENTS.md docs/1.开始使用 docs/10.外部API docs/11.OAuth第三方登录
```

预期：

- Markdown diff 无空白错误。
- OpenAPI JSON 可解析。
- 公共入口不再残留旧的 `v1.3.0` 运行基线。

如果本机已有 `bpmt-lite v1.5.0` 服务运行，可追加探测：

```bash
curl -fsSI http://127.0.0.1/
curl -fsSI http://127.0.0.1/api/docs/
curl -fsS http://127.0.0.1/api/openapi.json >/tmp/bpmt-openapi.json
```

本次不把启动完整 demo 或采集真实截图作为完成条件。

## 设计确认记录

- 采用方案 1：独立双章节加全局基线校准。
- API 文档必须在 `bpmt-doc` 内独立落地，不只链接 `bpmt-lite`。
- OAuth 章节先用流程图，不采集真实截图。
- OAuth 章节面向低代码用户，弱化底层数据模型说明。
- `bpmt-doc` 全局运行基线调整到 `v1.5.0`。
