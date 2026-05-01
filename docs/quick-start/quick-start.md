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
