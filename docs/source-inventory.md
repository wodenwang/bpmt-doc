# 资料源初始清单

## 当前代码仓库

路径：

```text
/Users/wenzhewang/workspace/bpmt_project/bpmt-lite
```

已确认入口：

| 文件 | 用途 |
| --- | --- |
| `AGENTS.md` | 当前仓库协作记忆和版本约定 |
| `README.md` | 当前公开 Quick Start、运行说明、维护入口 |
| `docker-compose.yml` | 当前 Docker 运行编排 |
| `database/README.md` | 初始化数据库说明 |
| `database/bpmt-min.sql.gz` | 最小初始化库 |
| `database/bpmt.sql.gz` | 完整初始化库 |
| `scripts/run.sh` | 面向使用者的一键运行入口 |
| `scripts/init-db.sh` | 初始化 SQL 解压入口 |
| `docs/maintenance.md` | 维护说明 |
| `docs/v1.3.0/*` | 当前版本 H5 和验收相关文档 |
| `platform/` | BPMT Web 应用主体 |
| `magic/` | Magic API 相关模块 |
| `dbtools/` | 数据库工具模块 |
| `util/` | 公共工具模块 |

## 旧 GitBook

路径：

```text
/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook
```

已确认入口：

| 文件 | 用途 |
| --- | --- |
| `README.md` | 旧文档首页 |
| `SUMMARY.md` | 旧 GitBook 目录 |
| `book.json` | 旧 GitBook 配置 |

旧目录主题：

| 旧章节 | 初始处理建议 |
| --- | --- |
| `1.开始使用` | 用当前 Docker Quick Start 重写，再吸收案例内容 |
| `2.数据库设计` | 对照当前动态表、数据库脚本和最小库校准 |
| `3.工作流设计` | 对照 Activiti 5.16.3 和平台流程模块校准 |
| `4.微信开发` | 标记为历史/待验证，确认当前是否仍支持 |
| `5.模块视图` | 对照当前平台 UI 和代码重写 |
| `6.脚本开发` | 对照当前脚本引擎和内置函数实现校准 |
| `7.控件开发` | 对照当前控件实现校准 |
| `8.用户权限` | 对照当前用户、角色、菜单、权限表与 UI 校准 |
| `9.其他设置` | 对照当前系统字典、菜单、界面风格实现校准 |
| `10.安装部署` | 以当前 Docker 化发行方式重写 |
| `99.最佳实践` | 作为历史资料，逐篇判断是否保留 |

## 初始风险

- 旧文档中的在线 demo、官网、注册更新、微信能力可能已经不可用。
- 旧文档的安装部署方式可能和 `bpmt-lite` 当前 Docker 运行方式冲突。
- `bpmt-lite` 版本还会继续变化，文档不能写死未验证的实现细节。
- 完整库和最小库的表数量、默认账号、默认镜像 tag 需要随版本重新确认。
