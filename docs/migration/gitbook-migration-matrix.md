# 旧 GitBook 迁移矩阵

| 旧路径 | 新路径 | 处理类型 | 状态 | 是否含图片 | 校准依据 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| `1.开始使用/1.1.快速安装.md` | `docs/quick-start/quick-start.md` | 重写 | 已校准 | 是 | `bpmt-lite/README.md`, `bpmt-lite/scripts/run.sh` | 旧安装路径不进入当前主文档 |
| `1.开始使用/1.2.案例1_企业管理.md` | `docs/user-guide/examples/onboarding-approval.md` | 迁移后校准 | 未迁移 | 是 | 待对照完整库 UI | 后续批次处理 |
| `1.开始使用/1.2.案例2_微信.md` | `docs/migration/legacy/wechat-example.md` | 历史参考 | 未迁移 | 是 | 待验证 | 首批不作为当前能力 |
| `2.数据库设计/2.数据库设计.md` | `docs/concepts/database-design.md` | 迁移后校准 | 未迁移 | 是 | 待对照数据库脚本 | 后续批次处理 |
| `3.工作流设计/3.工作流设计.md` | `docs/concepts/workflow-design.md` | 迁移后校准 | 未迁移 | 是 | 待对照 Activiti 与平台流程模块 | 后续批次处理 |
| `4.微信开发/README.md` | `docs/migration/legacy/wechat/README.md` | 历史参考 | 未迁移 | 否 | 待验证 | 首批不作为当前能力 |
| `5.模块视图/5.1.动态表视图.md` | `docs/concepts/module-views/dynamic-table-view.md` | 迁移后校准 | 待迁移 | 是 | 待对照当前 UI 和代码 | 首批样板 |
| `5.模块视图/5.2.工作流视图.md` | `docs/concepts/module-views/workflow-view.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.报表视图.md` | `docs/concepts/module-views/report-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.模板开发视图.md` | `docs/developer-guide/templates/template-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.处理器视图.md` | `docs/developer-guide/handlers/handler-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `5.模块视图/5.3.公告视图.md` | `docs/user-guide/module-views/announcement-view.md` | 迁移后校准 | 未迁移 | 否 | 待对照当前 UI 和代码 | 后续批次处理 |
| `6.脚本开发/6.1.上下文介绍.md` | `docs/developer-guide/scripts/context.md` | 迁移后校准 | 待迁移 | 是 | 待对照脚本运行上下文 | 首批样板 |
| `6.脚本开发/6.2.内置函数/db.md` | `docs/reference/functions/db.md` | 迁移后校准 | 待迁移 | 是 | 待对照函数实现 | 首批样板 |
| `7.控件开发/7.1.内置控件/text.md` | `docs/reference/widgets/text.md` | 迁移后校准 | 待迁移 | 是 | 待对照控件实现 | 首批样板 |
| `8.用户权限/8.1.组织架构.md` | `docs/user-guide/permissions/organization.md` | 迁移后校准 | 待迁移 | 是 | 待对照权限 UI 和数据 | 首批样板 |
| `8.用户权限/8.2.权限组.md` | `docs/user-guide/permissions/permission-groups.md` | 迁移后校准 | 未迁移 | 是 | 待对照权限 UI 和数据 | 后续批次处理 |
| `9.其他设置/9.1.界面风格.md` | `docs/user-guide/settings/ui-theme.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI | 后续批次处理 |
| `9.其他设置/9.2.功能域和菜单.md` | `docs/user-guide/settings/menu.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI | 后续批次处理 |
| `9.其他设置/9.3.系统字典.md` | `docs/user-guide/settings/dictionary.md` | 迁移后校准 | 未迁移 | 是 | 待对照当前 UI 和数据 | 后续批次处理 |
| `10.安装部署/10.安装部署.md` | `docs/ops/docker-run.md` | 重写 | 已校准 | 是 | `bpmt-lite/README.md`, `bpmt-lite/docker-compose.yml` | 旧 Tomcat/JDK 部署不进入当前主路径 |
| `10.安装部署/10.2.注册与更新.md` | `docs/migration/legacy/registration-update.md` | 历史参考 | 未迁移 | 是 | 待验证 | 首批不作为当前能力 |
| `99.最佳实践/README.md` | `docs/migration/legacy/best-practices/README.md` | 历史参考 | 未迁移 | 否 | 待验证 | 后续批次处理 |
