# queue 异步队列操作

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/QueueHelper.java`，类上标注 `@ScriptSupport("queue")`。脚本中通常以 `queue.方法名(...)` 调用。

把异步任务数据写入队列表。

| 函数签名 | 说明 |
| --- | --- |
| `add(String queue, Map<String, Object> element)` | 增加一个element到队列中 |
| `add(String queue, List<Map<String, Object>> elements)` | 增加一批element到队列中 |

<!-- CODE-CALIBRATION:END -->



BPMT的异步队列是指将一些耗时且实时性要求不高的任务通过后台异步进行处理,以此实现主业务流程快速响应，优化用户体验。


## *queue.add(type, map)*##

简单讲**queue.add** 可以讲一些异步处理任务所需数据存入自定义的动态表中，动态表模板：**异步队列-队列表**。以异步发送邮件为例，邮件发送需要：邮件标题，正文，发件人，收件人，附件等，可以在自定义的动态表中增加相关字段，在需要发送邮件的地方可以通过调用本函数来生成邮件发送任务。


#### 参数API ####
| 序号 | 参数类型 | 说明  |
| --- | --- | --- |
| 1		| 字符 	| 异步任务类型，可以自定义。（如：mail等） |
| 2		| map | map中存放异步任务处理需要的数据，具体参考动态表中扩展字段。 |
|返回值  | void 	  |NA|


## *queue.add(type, list[map])*##

同样地可以使用queue.add(type, list[map]) 一次添加多个有处理任务。


#### 参数API ####
| 序号 | 参数类型 | 说明  |
| --- | --- | --- |
| 1		| 字符 	| 异步任务类型，可以自定义。（如：mail等） |
| 2		| list<map> | list[map] 中存放多个异步任务处理需要的数据，具体参考动态表中扩展字段。 |
|返回值  | void 	  |NA|


其他参考： [6.5.异步队列]

@by borball
