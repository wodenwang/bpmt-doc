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
