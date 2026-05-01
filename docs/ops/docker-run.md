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
