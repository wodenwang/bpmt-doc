# flow 工作流函数库

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/flow/FlowHelper.java`，类上标注 `@ScriptSupport("flow")`。脚本中通常以 `flow.方法名(...)` 调用。

工作流订单、任务权限、节点展示、流程启动与等待任务触发函数。

| 函数签名 | 说明 |
| --- | --- |
| `fo(Map<String, Object> po)` | 将订单实体转换成FO(流程实体) |
| `checkTask(Task task)` | 校验当前用户是否允许处理订单 |
| `checkTask(Map<String, Object> po)` | 校验当前用户是否允许处理订单 |
| `checkTask(Map<String, Object> po, int index)` | 校验当前用户是否允许处理订单 |
| `checkRemove(Map<String, Object> po)` | 校验当前用户是否允许删除 |
| `checkShow(Map<String, Object> po)` | 校验当前用户是否允许查看 |
| `checkActivityShow(Map<String, Object> po, String activityId)` | 校验当前用户是否拥有查看某个节点的权限 |
| `showAssignee(Map<String, Object> po)` | 展示当前节点处理人 |
| `showAssignee(Task task)` | 展示当前节点处理人 |
| `showActivity(Map<String, Object> po)` | 展示当前节点 |
| `showActivity(Task task)` | 展示当前节点 |
| `showOpinion(Map<String, Object> po)` | 展示审批意见 |
| `getOrder(Task task)` | 根据任务获取订单实体 |
| `getOrder(ProcessInstance pi)` | 根据流程实例获取订单实体 |
| `start(String pdKey, Map<String, Object> vars)` | 创建订单并启动流程，返回订单对象。旧文档写“返回值无”不准确。 |
| `save(String pdKey, Map<String, Object> vars)` | 创建订单但不启动流程，返回订单对象。 |
| `start(String pdKey, Map<String, Object> vars, boolean init)` | 按 `init` 控制是否启动流程，返回订单对象。 |
| `signal(Map<String, Object> po)` | 触发等待任务，返回订单对象。旧文档写“返回值无”不准确。 |

<!-- CODE-CALIBRATION:END -->


flow为工作流函数库，主要功能为主流程和子流程之间的处理，启动子流程、触发主流程状态等。

## flow.start
```
在主流程启动子流程，这时节点进入等待状态。
```
#### 参数API
| 序号 | 参数类型 | 说明  |
| --- | --- | --- |
| 1	| 字符串 | 流程Key。|
| 2	| 对象 | 调用流程传入的参数。 |
|返回值  | 对象 | 订单对象 `Map<String, Object>`。|

![](../../assets/gitbook/6.脚本开发/6.2.内置函数/flow_demo1.png)

### 示例1：
```groovy
flow.start('OA_CON_APPLY_SON',[PARENT_ORD_ID:vo?.ORD_ID,RECRUITMENT:1]);
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/flow_demo2.png)

## flow.signal
```
触发等待任务，比如触发前面flow.start进行中的任务。
```
#### 参数API
| 序号 | 参数类型 | 说明  |
| --- | --- | --- |
| 1	| 对象 | 调用流程传入的参数。 |
| 返回值 | 对象 | 订单对象 `Map<String, Object>`。 |

![](../../assets/gitbook/6.脚本开发/6.2.内置函数/flow_demo3.png)

### 示例1：
```groovy
flow.signal(pOrd);
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/flow_demo4.png)
<br/>
`by Wilmer`
