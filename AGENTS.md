# AGENTS.md

## 作用范围

本文件是 `bpmt-doc` 仓库的 Codex 本地记忆入口。
后续 agent 在本仓做 BPMT 文档整理、旧 GitBook 迁移、`bpmt-lite` 代码解读、运行验证或发布说明更新时，必须先读本文件。

## 项目定位

- 仓库：`bpmt-doc`
- 远程：`https://github.com/wodenwang/bpmt-doc.git`
- 目标：建立 BPMT 的完整中文文档体系。
- 主资料源：`/Users/wenzhewang/workspace/bpmt_project/bpmt-lite`
- 旧文档参考：`/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`
- 当前阶段：空仓初始化，先建立项目记忆、资料源约定和文档工作台。

## Source Of Truth 顺序

1. 本仓 `AGENTS.md`
2. `bpmt-lite` 仓库的 `AGENTS.md`
3. `bpmt-lite` 仓库的 `README.md`、`docs/v1.5.0/*`、`docs/v1.4.1/*`、`docs/v1.4.0/*`、`docs/v1.3.0/*`、`docs/maintenance.md`
4. `bpmt-lite` 实现代码、配置、脚本和数据库文件
5. 旧 GitBook 文档目录

旧 GitBook 是历史参考，不是当前事实来源。凡是旧文档与 `bpmt-lite` 当前代码、README、Docker 配置、数据库脚本不一致，以 `bpmt-lite` 当前仓库为准。

## 关键本地路径

```text
/Users/wenzhewang/workspace/bpmt_project/bpmt-doc
/Users/wenzhewang/workspace/bpmt_project/bpmt-lite
/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook
```

## bpmt-lite 当前已知基线

截至本仓初始化时，`bpmt-lite` 的仓库记忆与 README 显示：

- 当前发布版本：`v1.5.0`
- 默认 Web 镜像：`ghcr.io/wodenwang/bpmt-lite:1.5.0`
- 默认 API 镜像：`ghcr.io/wodenwang/bpmt-lite-api:1.5.0`
- 默认访问地址：`http://127.0.0.1/`
- API 文档地址：`http://127.0.0.1/api/docs/`
- OpenAPI 地址：`http://127.0.0.1/api/openapi.json`
- 默认登录账号：`admin/admin`
- 默认数据库：`bpmt`
- 最小数据库：`bpmt_min`
- 最小库初始化后约 176 张表
- 完整库初始化后约 380 张表
- 技术栈：Java 8、Maven 3、Tomcat 7、MariaDB、nginx

这些信息会随 `bpmt-lite` 后续版本变化。每次更新本文档前，应先重新读取 `bpmt-lite/AGENTS.md` 和 `bpmt-lite/README.md`。

## 旧 GitBook 初始目录

旧文档位于 `/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`。源目录可见结构包括：

- 开始使用
- 数据库设计
- 工作流设计
- 微信开发
- 模块视图
- 脚本开发
- 控件开发
- 用户权限
- 其他设置
- 安装部署（当前输出已移除，仅 `10.5.其他工具.md` 迁入“其他设置”）
- 最佳实践（当前输出已移除）

迁移时不要机械搬运。当前用户文档应保持旧 GitBook 章节结构，不再保留额外迁移矩阵、样板目录或 front matter。

## 文档编写规则

- 本仓文档统一使用简体中文。
- 命令、路径、类名、配置键、镜像名、Maven 坐标保持原样。
- 初学者路径优先：先给最短可运行步骤，再给维护者细节。
- 涉及运行、安装、数据库、登录、Docker 的说明，必须与 `bpmt-lite` 当前版本一致。
- 迁移状态和范围记录在本文件中，不写入用户可读 Markdown 正文的 front matter。
- 需要引用代码行为时，优先给出 `bpmt-lite` 中的实际文件路径和结论。

## 推荐工作流

1. 读取本文件。
2. 读取 `bpmt-lite/AGENTS.md` 与 `bpmt-lite/README.md`。
3. 针对当前主题搜索 `bpmt-lite` 代码和配置。
4. 对照旧 GitBook 同主题内容。
5. 写入或更新本仓文档。
6. 如涉及可运行流程，执行最小验证并记录验证命令和结果。

## 初始化后首批任务

- 建立文档站技术选型和目录结构。
- 梳理旧 GitBook 章节迁移矩阵。
- 先完成 Quick Start、运行部署、数据库初始化、账号登录这几块当前用户最需要的文档。
- 再逐步解读工作流、动态表、表单控件、脚本函数、权限体系等核心模块。

## 当前迁移状态

- 旧 GitBook 主动源：`/Users/wenzhewang/workspace/bpmt_project/运行时参考/gitbook`
- 已迁移目录：`docs/`
- 完整目录：`docs/SUMMARY.md`
- 图片目录：`docs/assets/gitbook/`
- 当前有效迁移范围：`安装部署` 与 `最佳实践` 两章已从迁移输出中移除；原 `安装部署/其他工具` 内容迁入 `docs/9.其他设置/9.4.其他工具.md`。
- 当前迁移覆盖：89 个 Markdown 文件、351 个图片资产。
- 运行事实校准页：`docs/1.开始使用/1.1.快速安装.md`。
- 模块视图校准：`docs/5.模块视图/5.3.报表视图.md` 已改为面向低代码用户的图文 SOP，截图来自本机完整库运行实例，资产为 `docs/assets/gitbook/5.模块视图/report-sop-*.png`。
- 模块视图校准：`docs/5.模块视图/5.1.动态表视图.md` 已按报表视图写法重写为图文 SOP，示例为本机完整库中的“基础-产品表”，资产为 `docs/assets/gitbook/5.模块视图/dyn-sop-*.png`。
- 控件章节已完成实现关系核对：`docs/7.控件开发/README.md` 记录 `Widget` 接口识别口径、`AnnotatedWidgetProcessorsHolder` 动态加载机制、`widget/{mode}` 模板清单、`doc/widget` 覆盖范围和缺页清单；已补 `editor` 页面，并确认 `img`、`icon` 等继承 `FileManagerWidget` / `DefaultWidget` 的类也是控件。
- 外部 API 章节规划：新增 `docs/10.外部API/README.md` 和 `docs/10.外部API/openapi.json`，以 `bpmt-lite/docs/v1.4.1/api-reference.md` 与 `openapi.json` 为事实来源，面向低代码用户和集成系统独立落地。
- OAuth 第三方登录章节规划：新增 `docs/11.OAuth第三方登录/README.md`，以 `bpmt-lite/docs/v1.5.0/oauth-login-reference.md` 为事实来源，使用流程图说明登录顺序、鉴权情况、错误码和应对建议，不展开底层表结构。
- 后续校准优先级：脚本函数实现、控件实现中的 `doc/widget` 缺口、工作流 UI、微信开发能力。
