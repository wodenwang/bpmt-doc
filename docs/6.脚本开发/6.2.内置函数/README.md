# 内置函数

本章按 `bpmt-lite` 当前代码重新校准。系统启动时，`ExprlangAnnotationScanner` 会扫描 `com.riversoft` 包下标注 `@ScriptSupport` 的类，并把注解值注册为脚本上下文函数库名。

因此，本章的当前事实来源是 `bpmt-lite/platform/src/main/java/com/riversoft/core/script/annotation/ScriptSupport.java` 和各个标注类，而不是旧 GitBook 的历史目录。

## 当前函数库

| 函数库 | 说明 | 源码 |
| --- | --- | --- |
| [bpmn BPMN 模型辅助](bpmn.md) | 解析 Activiti `BpmnModel`，获取节点、节点外连线和画布坐标信息。 | `bpmt-lite/platform/src/main/java/com/riversoft/flow/BpmnHelper.java` |
| [cm 通用函数库](cm.md) | 页面、控件、视图、字典、请求上下文等 BPMT Web 层辅助函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/web/CommonHelper.java` |
| [db 数据库操作](db.md) | 面向动态表和原生 SQL 的数据库函数。动态表对象通常需要 `$type$` 标识表名。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/db/DbHelper.java` |
| [excel Excel 操作](excel.md) | 解析 Excel 上传文件，或按模板生成 Excel 文件。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/ExcelHelper.java` |
| [file 文件操作](file.md) | 在脚本中读取、转换、下载、编码上传附件。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/web/FileHelper.java` |
| [flow 工作流函数库](flow.md) | 工作流订单、任务权限、节点展示、流程启动与等待任务触发函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/flow/FlowHelper.java` |
| [fmt 格式化](fmt.md) | 日期、数字、金额、拼音、JSON 与基础类型转换函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/FormatterFunction.java` |
| [http HTTP 客户端](http.md) | 返回 RestAssured `RequestSpecification`，用于脚本里发起 HTTP 请求。 | `bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/HttpUtil.java` |
| [img 图片处理](img.md) | 图片头像、base64、缩放、水印、旋转、合并等处理函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/ImageHelper.java` |
| [json JSON 处理](json.md) | JSON 序列化和 JsonPath 解析函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/JsonUtil.java` |
| [log 系统日志](log.md) | 脚本运行日志和 Web 进度日志函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/LoggerHelper.java` |
| [mail 邮件操作](mail.md) | 普通邮件、系统邮件和异步系统邮件发送函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/mail/script/MailHelper.java` |
| [math 数学操作](math.md) | 数字集合的汇总、平均、最大值和最小值。 | `bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/MathUtil.java` |
| [mq 消息队列](mq.md) | 获取 RabbitMQ 辅助对象。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/mq/MQHelper.java` |
| [orm 内建数据库(Hibernate)](orm.md) | 面向 BPMT 内建 Hibernate 实体的 HQL 和实体操作函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/db/ORMHelper.java` |
| [pdf PDF 表单](pdf.md) | 从 PDF 表单中抽取字段值。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/PdfHelper.java` |
| [qrcode 二维码](qrcode.md) | 生成二维码文件、流、base64 图片，并支持尺寸和颜色配置。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/QRCodeHelper.java` |
| [queue 异步队列操作](queue.md) | 把异步任务数据写入队列表。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/QueueHelper.java` |
| [seq 流水与随机数](seq.md) | UUID、唯一字符、模式流水号和随机字符串生成函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/SequenceHelper.java` |
| [sms 短信验证码](sms.md) | 阿里短信模板发送、验证码发送和验证码校验。 | `bpmt-lite/platform/src/main/java/com/riversoft/ali/SMSHelper.java` |
| [store 外部存储](store.md) | 获取默认或外部 Redis，以及外部数据库函数对象。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/store/StoreHelper.java` |
| [user 用户与组织架构](user.md) | 当前用户、组织、角色、用户查询、组织递归和权限判断函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/UserHelper.java` |
| [util 通用工具](util.md) | 日期差值、日期加减、压缩包处理和 URL 编码函数。 | `bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/Util.java` |
| [wx 微信函数库](wx.md) | 获取企业号、公众号、小程序相关辅助对象。 | `bpmt-lite/platform/src/main/java/com/riversoft/wx/WxHelper.java` |
| [xml XML 处理](xml.md) | XML 文本、文件、流等输入解析为 XmlPath。 | `bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/XmlUtil.java` |

## 与旧文档的主要差异

- 新增补齐：`bpmn`、`sms`、`xml`、`http`、`json`、`store`、`mq`、`img`、`qrcode`、`pdf`、`file`。这些函数库在代码中已有 `@ScriptSupport` 标注，但旧目录未列出。
- 保留并校准：`cm`、`util`、`db`、`orm`、`fmt`、`math`、`flow`、`wx`、`excel`、`log`、`mail`、`queue`、`seq`、`user`。旧示例仍保留在各页下方，页首表格为当前代码签名。
- 纠错重点：`util.diffYear`、`util.diffMonth` 在当前代码中是私有方法，不能直接作为脚本函数调用；`flow.start`、`flow.signal` 当前返回订单对象，不是无返回值；`db.save` 既有保存动态表对象的重载，也有执行 insert SQL 并返回自增 ID 的重载。

## 调用形态

```groovy
def vo = db.findByPk("BS_CUSTOMER", "CUS001")
def text = fmt.formatDate(now)
log.info("customer={}", vo?.CUSTOMER_ID)
```
