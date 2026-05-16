# 外部 API

## 适用版本

本章适用于 `bpmt-lite v1.7.2` 当前外部业务 API。它包含 `v1.4.1` 已有的动态表结构、动态表模板和数据库操作接口，也包含 `v1.7.0` 新增的动态表视图配置 API、`v1.7.1` 新增的报表视图配置 API，以及 `v1.7.2` 对报表视图创建、视图缓存和数据库操作 `save` 的修复。

机器可读接口快照已归档为本目录下的 `openapi.json`，来源为 `bpmt-lite/docs/v1.7.2/openapi.json`。人工阅读时以本文为入口，集成工具生成客户端时优先读取 `docs/10.外部API/openapi.json`。

## 能力范围

- 动态表结构管理：查询、创建、调整、同步 DDL。
- 动态表模板：查询模板列表、查看模板详情、按模板创建动态表。
- 数据库操作：`query`、`find`、`save`、`exec`。
- 动态表视图配置：读取、校验、创建、整体替换、分区 patch、带确认删除 `dyn` 视图配置。
- 报表视图配置：读取、校验、创建、整体替换、分区 patch、带确认删除 `rep_list` 报表视图配置。
- 本 API 不提供动态表删除。
- 本 API 不提供动态表业务数据 CRUD。
- OAuth 第三方登录不属于本章 API；OAuth 端点不使用 HMAC 业务签名。

动态表结构写接口会同时修改 BPMT 元数据和数据库结构。调用前应确认目标表、字段、索引和执行窗口，避免在生产环境误改表结构。

动态表视图和报表视图 API 只管理视图配置元数据，不负责发布菜单、首页卡片、外部入口或业务数据。报表视图 API 也不会执行 SQL、按钮动作或客户端脚本，调用方需要通过实际业务页面确认最终展示和权限过滤效果。

## 接入入口

| 入口 | 用途 |
| --- | --- |
| `http://127.0.0.1/api/docs/` | Web API 文档，适合人工阅读和调试 |
| `http://127.0.0.1/api/openapi.json` | 运行实例暴露的 OpenAPI JSON |
| `docs/10.外部API/openapi.json` | 本仓归档的 OpenAPI JSON 快照，适合 AI agent、N8N、飞书集成平台和后续 skill 封装 |

默认本地 API 基础地址为：

```text
http://127.0.0.1/api
```

本文接口路径均按公开入口书写，例如 `/api/v1/dynamic-tables`。

## 鉴权方式

业务 API 使用 `appKey/appSecret` 的 HMAC-SHA256 签名。默认本地配置为：

```text
BPMT_API_APP_KEY=bpmt-api
BPMT_API_APP_SECRET=bpmt-api-secret
BPMT_API_ACT_AS=admin
```

正式部署必须覆盖默认 `appSecret`。`BPMT_API_ACT_AS` 是 API 固定技术用户，未配置或用户不可用时兜底 `admin`。

每个业务请求都需要携带以下请求头：

| 请求头 | 说明 |
| --- | --- |
| `X-BPMT-App-Key` | 调用方 appKey |
| `X-BPMT-Timestamp` | 秒级时间戳 |
| `X-BPMT-Nonce` | 单次请求随机串，避免重放 |
| `X-BPMT-Signature` | HMAC-SHA256 签名结果 |

签名原文按以下 6 行拼接，行与行之间使用换行符：

```text
METHOD
PATH
NORMALIZED_QUERY
TIMESTAMP
NONCE
SHA256_HEX(BODY)
```

规则：

- `METHOD` 使用大写 HTTP 方法，例如 `GET`、`POST`、`PUT`。
- `PATH` 必须包含公开 context path，例如 `/api/v1/dynamic-tables`，不能只签 `/v1/dynamic-tables`。
- `NORMALIZED_QUERY` 按解码后的参数名和值排序，重复参数按解码后的值排序，空格编码为 `%20` 而不是 `+`；无 query 时保留为空行。
- `BODY` 为空时使用空字符串计算 SHA-256。
- `appSecret` 不允许出现在 URL、query 或 request body 中。

## 签名示例

下面示例查询最新动态表列表，可直接复制后在本机执行：

```bash
BASE_URL="http://127.0.0.1/api"
APP_KEY="bpmt-api"
APP_SECRET="bpmt-api-secret"
METHOD="GET"
PATH="/api/v1/dynamic-tables"
QUERY="order=desc&sort=createDate"
BODY=""
TIMESTAMP="$(date +%s)"
NONCE="demo-$TIMESTAMP"
BODY_HASH="$(printf '%s' "$BODY" | shasum -a 256 | awk '{print $1}')"
CANONICAL="$(printf '%s\n%s\n%s\n%s\n%s\n%s' "$METHOD" "$PATH" "$QUERY" "$TIMESTAMP" "$NONCE" "$BODY_HASH")"
SIGNATURE="$(printf '%s' "$CANONICAL" | openssl dgst -sha256 -hmac "$APP_SECRET" | awk '{print $NF}')"

curl -sS "$BASE_URL/v1/dynamic-tables?$QUERY" \
  -H "X-BPMT-App-Key: $APP_KEY" \
  -H "X-BPMT-Timestamp: $TIMESTAMP" \
  -H "X-BPMT-Nonce: $NONCE" \
  -H "X-BPMT-Signature: $SIGNATURE"
```

注意：`curl` 请求地址使用 `$BASE_URL/v1/...`，但签名 `PATH` 使用公开入口 `/api/v1/...`，两者都不能省略自己的路径部分。

## 通用响应格式

业务 API 响应统一使用 `success/data/error` 包装。

成功响应：

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

错误响应：

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "DYNAMIC_TABLE_NOT_FOUND",
    "message": "动态表不存在。",
    "details": {},
    "requestId": "..."
  }
}
```

处理错误时优先记录 `error.code` 和 `error.requestId`。`message` 适合展示给维护者排障，不建议作为程序分支判断条件。

常见 HTTP 状态：

| 状态 | 含义 | 建议 |
| --- | --- | --- |
| `400` | JSON 格式、字段类型或必填参数错误 | 检查请求体和 query 参数 |
| `401` | 缺少认证信息、appKey 不存在或签名错误 | 检查 4 个 HMAC 请求头、签名 path、时间戳和密钥 |
| `403` | 技术用户不可用或权限不足 | 检查 `BPMT_API_ACT_AS` 对应用户 |
| `404` | 动态表或模板不存在 | 检查 path 中的表名或模板编码 |
| `409` | 表、字段或索引冲突 | 检查目标名称是否已存在或与现有结构冲突 |
| `422` | 动态表规则校验或 DDL 执行失败 | 读取 `error.details`，必要时先在测试库验证 |
| `500` | 未预期系统异常 | 携带 `requestId` 查询服务日志 |

## 接口清单

| 方法 | 路径 | 说明 | 风险 |
| --- | --- | --- | --- |
| `GET` | `/api/v1/dynamic-tables` | 查询动态表结构列表 | 只读 |
| `POST` | `/api/v1/dynamic-tables` | 创建动态表结构 | 写元数据，执行 DDL |
| `GET` | `/api/v1/dynamic-tables/{name}` | 查询单个动态表结构 | 只读 |
| `PUT` | `/api/v1/dynamic-tables/{name}` | 调整动态表结构 | 写元数据，执行 DDL |
| `POST` | `/api/v1/dynamic-tables/{name}/ddl:sync` | 同步动态表 DDL | 执行 DDL |
| `GET` | `/api/v1/dynamic-tables/templates` | 查询动态表模板列表 | 只读 |
| `GET` | `/api/v1/dynamic-tables/templates/{templateCode}` | 查询动态表模板详情 | 只读 |
| `POST` | `/api/v1/dynamic-tables/templates/{templateCode}:create-table` | 按模板建表 | 写元数据，执行 DDL |
| `POST` | `/api/v1/database-operations/query` | SQL 查询（SELECT） | 只读 |
| `POST` | `/api/v1/database-operations/find` | SQL 单行查询（SELECT） | 只读 |
| `POST` | `/api/v1/database-operations/save` | SQL 保存（INSERT） | 高风险写操作 |
| `POST` | `/api/v1/database-operations/exec` | SQL 执行（UPDATE/DELETE） | 高风险写操作 |
| `GET` | `/api/v1/dynamic-table-views` | 分页列出动态表视图配置 | 只读 |
| `POST` | `/api/v1/dynamic-table-views?dryRun=true` | 创建动态表视图配置 | 写元数据，不执行 DDL |
| `POST` | `/api/v1/dynamic-table-views:validate` | 校验动态表视图完整快照 | 只读 |
| `GET` | `/api/v1/dynamic-table-views/{viewKey}` | 导出动态表视图完整快照 | 只读 |
| `PUT` | `/api/v1/dynamic-table-views/{viewKey}?dryRun=true` | 全量替换动态表视图配置 | 写元数据，不执行 DDL |
| `PATCH` | `/api/v1/dynamic-table-views/{viewKey}/{section}?dryRun=true` | 替换动态表视图单个 section | 写元数据，不执行 DDL |
| `DELETE` | `/api/v1/dynamic-table-views/{viewKey}?confirmViewKey={viewKey}` | 删除动态表视图配置 | 写元数据，不删除业务数据 |
| `GET` | `/api/v1/report-views` | 分页列出报表视图配置 | 只读 |
| `POST` | `/api/v1/report-views?dryRun=true` | 创建报表视图配置 | 写元数据，不执行 DDL |
| `POST` | `/api/v1/report-views:validate` | 校验报表视图完整快照 | 只读 |
| `GET` | `/api/v1/report-views/{viewKey}` | 导出报表视图完整快照 | 只读 |
| `PUT` | `/api/v1/report-views/{viewKey}?dryRun=true` | 全量替换报表视图配置 | 写元数据，不执行 DDL |
| `PATCH` | `/api/v1/report-views/{viewKey}/{section}?dryRun=true` | 替换报表视图单个 section | 写元数据，不执行 DDL |
| `DELETE` | `/api/v1/report-views/{viewKey}?confirmViewKey={viewKey}` | 删除报表视图配置 | 写元数据，不删除业务数据 |

## 动态表结构接口

### 查询动态表列表

```text
GET /api/v1/dynamic-tables?start=0&limit=20&sort=createDate&order=desc
```

参数：

| 参数 | 默认 | 约束 | 说明 |
| --- | --- | --- | --- |
| `start` | `0` | 大于或等于 `0` | 起始偏移 |
| `limit` | `20` | 最大 `100` | 返回数量 |
| `sort` | `createDate` | `name`、`description`、`createDate`、`updateDate`、`cacheFlag` | 排序字段 |
| `order` | `desc` | `asc`、`desc` | 排序方向 |

### 查询单个动态表

```text
GET /api/v1/dynamic-tables/{name}
```

`name` 是动态表英文名。不存在时返回 `404`，错误码通常为 `DYNAMIC_TABLE_NOT_FOUND`。

### 创建或调整动态表

```text
POST /api/v1/dynamic-tables
PUT /api/v1/dynamic-tables/{name}
```

请求体示例：

```json
{
  "name": "TMP_EXAMPLE",
  "description": "示例动态表",
  "cacheFlag": 0,
  "columns": [
    {
      "name": "ID",
      "description": "主键",
      "type": "String",
      "totalSize": 64,
      "primaryKey": true,
      "required": true
    },
    {
      "name": "NAME",
      "description": "名称",
      "type": "String",
      "totalSize": 100
    }
  ],
  "indexes": [
    {
      "name": "IDX_TMP_EXAMPLE_NAME",
      "columns": ["NAME"]
    }
  ]
}
```

动态表请求体字段：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 动态表英文名，必须以字母开头，只允许字母、数字和下划线 |
| `description` | 否 | 动态表中文说明或业务说明 |
| `cacheFlag` | 否 | 表结构缓存标记，`0` 表示禁用，`1` 表示启用 |
| `columns` | 是 | 字段数组，至少 1 个字段 |
| `indexes` | 否 | 索引数组，每个索引包含索引名和字段名数组 |

字段 `columns` 中每一项的字段：

| 字段 | 必填 | 默认 | 说明 |
| --- | --- | --- | --- |
| `name` | 是 | 无 | 字段英文名，必须以字母开头，只允许字母、数字和下划线 |
| `description` | 否 | 无 | 字段中文说明或业务说明 |
| `type` | 否 | `String` | 字段类型 |
| `totalSize` | 否 | `100` | 字段长度；字符串和数值字段常用 |
| `scale` | 否 | `0` | 小数位数；`BigDecimal` 常用 |
| `primaryKey` | 否 | `false` | 是否主键 |
| `required` | 否 | `false` | 是否必填 |

支持的字段类型：

| 类型 | 说明 |
| --- | --- |
| `String` | 字符串，通常设置 `totalSize` |
| `Integer` | 整数 |
| `BigDecimal` | 数值，通常设置 `totalSize` 和 `scale` |
| `Date` | 日期时间 |
| `Long` | 长整数 |
| `Clob` | 大文本 |
| `Blob` | 二进制 |

规则：

- 至少需要一个 `primaryKey=true` 字段。
- 系统表前缀默认禁止通过 API 创建或调整。
- `PUT /api/v1/dynamic-tables/{name}` 以 path 中的 `{name}` 为准。
- 调整动态表会写元数据并执行 DDL，失败时优先查看 `error.code`、`error.details` 和 `requestId`。

### 同步 DDL

```text
POST /api/v1/dynamic-tables/{name}/ddl:sync
```

该接口会先确认动态表元数据存在，再执行 DDL 同步逻辑。不存在的动态表返回 `404`。该接口会执行 DDL，建议只在确认元数据与物理表需要对齐时调用。

## 动态表模板接口

模板接口用于从预置结构快速创建动态表。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| `GET` | `/api/v1/dynamic-tables/templates` | 查询模板编码列表 |
| `GET` | `/api/v1/dynamic-tables/templates/{templateCode}` | 查询模板详情 |
| `POST` | `/api/v1/dynamic-tables/templates/{templateCode}:create-table` | 按模板创建动态表 |

按模板创建动态表时，仍会写入动态表元数据并执行 DDL。调用前应确认模板生成的表名和字段不会与现有结构冲突。

## 数据库操作接口

数据库操作接口用于受控执行 SQL。它不是通用数据库管理后台，应尽量用于明确、短小、可审计的 SQL。

请求体字段：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `sql` | 是 | SQL 文本 |
| `args` | 否 | 位置参数数组，按 SQL 占位符顺序传入 |

请求体字段名是 `args`，它是 SQL 位置绑定参数数组，顺序必须与 SQL 占位符顺序一致。

请求体示例：

```json
{
  "sql": "select USERID, USER_NAME from US_USER where USERID = ?",
  "args": ["admin"]
}
```

操作行为：

| 接口 | 行为 | 风险和建议 |
| --- | --- | --- |
| `POST /api/v1/database-operations/query` | 执行 SQL 查询，返回多行结果 | 通常只允许 `SELECT`，适合列表和报表读取 |
| `POST /api/v1/database-operations/find` | 执行 SQL 查询，返回单行结果 | 通常只允许 `SELECT`，适合按主键或唯一条件读取 |
| `POST /api/v1/database-operations/save` | 执行 SQL 保存，通常用于 `INSERT` | 高风险写操作，调用前确认字段、参数和事务影响；`v1.7.2` 已修复显式主键 insert 且 JDBC 不返回自增 key 时误报 500 的问题 |
| `POST /api/v1/database-operations/exec` | 执行 SQL 更新，通常用于 `UPDATE` 或 `DELETE` | 高风险写操作，建议生产环境默认关闭或只给受控系统使用 |

`save` 和 `exec` 写操作可通过环境变量关闭：

```text
BPMT_API_DBOPS_EXECUTE_ENABLED=false
```

生产环境如无明确写 SQL 集成需求，建议设置 `BPMT_API_DBOPS_EXECUTE_ENABLED=false`，只保留 `query` 和 `find` 读能力。

## 动态表视图配置接口

动态表视图 API 用于管理 `/{viewKey}.view` 对应的 `dyn` 视图配置。它面向外部 AI agent、自动化平台和集成脚本，适合把已有动态表的页面配置导出、检查、复制或按规则调整。

边界：

- 只管理动态表视图配置，不管理动态表结构和业务数据。
- 不发布菜单、首页卡片或按钮入口。
- 删除视图配置不会删除底层动态表、业务数据、日志表或日志数据。
- 写接口支持 `dryRun=true`，可先查看写入计划再真正执行。
- `v1.7.2` 起，写入成功后会清理相关 Hibernate session、视图实体缓存和查询缓存，避免业务页面继续读取旧配置。

常用流程：

1. `GET /api/v1/dynamic-table-views/{viewKey}` 导出现有视图快照。
2. 在外部系统中调整快照内容。
3. `POST /api/v1/dynamic-table-views:validate` 校验完整快照。
4. `PUT /api/v1/dynamic-table-views/{viewKey}?dryRun=true` 查看写入计划。
5. 确认后去掉 `dryRun=true` 执行写入。

可 patch 的 `section`：

```text
base
fields
queries
limits
processors
variables
subviews
buttons
weixin
scripts
```

查询区、变量和处理器等不支持权限写入的位置，如果传入非空 `permissions`，会在校验结果中返回 `UNSUPPORTED_PERMISSION`。

## 报表视图配置接口

报表视图 API 用于管理 `/{viewKey}.view` 对应的 `rep_list` 报表视图配置。它维护 `VW_URL` 与 `VW_REPORT*` 元数据，不直接执行报表 SQL。

边界：

- 只管理报表视图配置，不管理菜单、首页卡片、外部入口或报表业务数据。
- 删除报表视图不会删除业务表、业务数据、菜单、首页卡片或外部入口。
- API 不执行 `mainSql`、查询 SQL、约束 SQL、PK SQL、按钮动作或客户端脚本。
- `v1.7.2` 已修复报表视图创建时 `validate`、`dryRun` 通过但实际写入 `VW_REPORT.SORT` 为空导致 500 的问题。
- `v1.7.2` 起，写入成功后会清理相关 Hibernate session、视图实体缓存和查询缓存，避免业务页面继续读取旧配置。

可 patch 的 `section`：

```text
base
columns
queries
limits
variables
subviews
buttons
weixin
scripts
```

常用流程：

1. `GET /api/v1/report-views/{viewKey}` 导出现有报表视图快照。
2. `POST /api/v1/report-views:validate` 校验完整快照。
3. `POST /api/v1/report-views?dryRun=true` 或 `PUT /api/v1/report-views/{viewKey}?dryRun=true` 查看创建或替换计划。
4. 确认风险提示后去掉 `dryRun=true` 正式写入。
5. 打开实际业务页面确认 SQL 结果列、权限过滤、按钮动作和运行性能。

报表视图响应中的 `warnings` 会提示潜在风险。常见提示码：

| code | 含义 |
| --- | --- |
| `SQL_SCRIPT_PRESENT` | 存在主 SQL、查询 SQL、约束 SQL 或 PK SQL |
| `CLIENT_SCRIPT_PRESENT` | 存在列表 JS、展示内容脚本、汇总内容脚本或提示脚本 |
| `BUTTON_ACTION_PRESENT` | 存在自定义按钮动作 |
| `EXTERNAL_DB_KEY_PRESENT` | 配置了非默认 `dbKey` |
| `UNEXECUTED_SQL_SEMANTICS` | API 未执行 SQL，不能保证 SQL 语义、结果列、权限过滤或运行性能正确 |

## 常见错误和处理建议

| 错误码 | 常见原因 | 处理建议 |
| --- | --- | --- |
| `INVALID_SIGNATURE` | 签名错误、签名 path 少了 `/api`、query 归一化不一致、body hash 不一致 | 重新打印 6 行 canonical string，对照请求 URL、query、body 和 `X-BPMT-Signature` |
| `INVALID_APP_KEY` | `X-BPMT-App-Key` 不存在或未配置 | 检查调用方 appKey 和服务端环境变量 |
| `DYNAMIC_TABLE_NOT_FOUND` | 查询、调整或同步的动态表不存在 | 确认 `{name}` 是否为动态表英文名 |
| `DYNAMIC_TABLE_CONFLICT` | 表名、字段名或索引与现有结构冲突 | 调整命名后重试，避免覆盖已有结构 |
| `DYNAMIC_TABLE_VALIDATION_FAILED` | 字段类型、主键、必填项或系统表前缀校验失败 | 按本文字段规则修正请求体 |
| `DDL_SYNC_FAILED` | DDL 执行失败 | 在测试库复现，检查字段长度、索引和数据库权限 |
| `SQL_VALIDATION_FAILED` | SQL 类型或参数不符合接口规则 | 检查 SQL 是否属于对应接口允许的操作 |
| `DBOPS_EXECUTE_DISABLED` | 服务端关闭了 SQL 写操作 | 如确需写入，由维护者评估后调整 `BPMT_API_DBOPS_EXECUTE_ENABLED` |
| `SQL_EXECUTION_FAILED` | SQL 执行异常 | 检查 SQL、参数类型、表名字段名和数据库约束 |
| `DYNAMIC_TABLE_VIEW_INVALID_SNAPSHOT` | 动态表视图快照结构、字段引用或 section 内容不合法 | 先调用 validate，按 `error.details` 修正快照 |
| `UNSUPPORTED_PERMISSION` | 动态表视图中不支持权限写入的位置传入了 `permissions` | 删除对应区块的 `permissions` 后重新校验 |
| `REPORT_VIEW_INVALID_SNAPSHOT` | 报表视图快照结构、SQL 配置或 section 内容不合法 | 先调用 validate，按 `error.details` 修正快照 |
| `REPORT_VIEW_NOT_REP_LIST` | 目标视图不是 `rep_list` 报表视图 | 确认 `viewKey` 指向报表列表视图 |
| `REPORT_VIEW_CONFIRM_REQUIRED` | 删除报表视图时缺少确认参数 | 增加 `confirmViewKey={viewKey}` 后再删除 |

处理建议：

- 对 `401` 先排查签名，不要重复改业务参数。
- 对 `409` 和 `422` 先在测试库验证动态表结构。
- 对数据库写操作失败，不要自动重试 `save` 或 `exec`，先人工确认是否已部分生效。
- 排障时保留 `error.requestId`，方便在 API 容器日志中定位同一次请求。

## 给 AI agent 和集成平台的建议

- 优先读取 `docs/10.外部API/openapi.json`，不要从 Web HTML 页面反推接口。
- 所有业务 API 都要签名，`/api/docs/` 和 `/api/openapi.json` 文档端点除外。
- 生成签名时，`PATH` 必须使用 `/api/v1/...`，不能使用 `/v1/...`。
- 写动态表结构会执行 DDL。AI agent 在自动执行前应展示表名、字段、索引和风险摘要。
- 写动态表视图或报表视图配置不会执行 DDL，但会修改 BPMT 视图元数据。AI agent 在自动执行前应展示 `viewKey`、变更 section、删除项和风险提示。
- 报表视图 API 不验证 SQL 语义。涉及 SQL、按钮动作或客户端脚本时，应安排人工或业务页面验收。
- 不要尝试调用动态表删除或动态表业务数据 CRUD；本 API 没有暴露这些能力。
- 对 SQL 写接口，生产环境建议设置 `BPMT_API_DBOPS_EXECUTE_ENABLED=false`。如果必须开启，应限制调用方、记录审计日志，并禁止 AI agent 自主生成不可回滚 SQL。
- 处理错误时优先读取 `success/data/error` 中的 `error.code` 和 `error.requestId`。
- OAuth 第三方登录不是本章 HMAC 业务 API，不要把 OAuth 端点纳入 API 签名流程。
