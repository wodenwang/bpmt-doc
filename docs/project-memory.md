# BPMT 文档项目记忆

## 项目主旨

本项目要建立 BPMT 的完整文档，覆盖使用者快速上手、部署运维、平台核心概念、功能使用、二次开发和维护者说明。

本仓不是 BPMT 运行代码仓。运行代码和当前事实来源在：

```text
/Users/wenzhewang/workspace/bpmt_project/bpmt-lite
```

历史文档参考在：

```text
/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook
```

## 当前基线

从 `bpmt-lite` 当前 README 和 AGENTS 可知：

- 当前版本是 `v1.3.0`。
- 默认镜像是 `ghcr.io/wodenwang/bpmt-lite:1.3.0`。
- 默认 Web 入口是 `http://127.0.0.1:8080/`。
- H5 登录入口是 `http://127.0.0.1:8080/login.jsp?_action_mode=h5`。
- 默认登录账号是 `admin/admin`。
- 默认数据库是 `bpmt`。
- 最小数据库是 `bpmt_min`。
- 最小库约 173 张表。
- 完整库约 377 张表。
- 技术栈保持 Java 8、Maven 3、Tomcat 7、MariaDB。

## 文档事实校准规则

每次更新文档时，按以下顺序校准：

1. 读取 `bpmt-lite/AGENTS.md`。
2. 读取 `bpmt-lite/README.md`。
3. 搜索并读取对应代码、配置、脚本、数据库文件。
4. 对照旧 GitBook 同主题章节。
5. 明确记录哪些内容是当前事实，哪些内容来自历史参考且待验证。

## 旧 GitBook 的价值

旧 GitBook 已经有较完整的主题覆盖，适合作为章节骨架和历史功能说明来源。它的问题是：

- 版本较老。
- 部分外部链接和服务已经不可用。
- 安装部署说明很可能不符合当前 Docker 化发行方式。
- 微信、Office、旧注册更新、旧工具链等内容需要重新判断是否仍适用。

## 首批文档优先级

1. 当前可运行路径：Quick Start、Docker、数据库、登录。
2. 当前部署与维护：运行目录、配置覆盖、日志、重建数据库。
3. 平台核心概念：BPMT、动态表、工作流、模块视图、权限。
4. 二次开发：脚本函数、控件、处理器、计划任务、异步队列。
5. 历史/可选能力：微信、Office、注册更新、旧工具。
