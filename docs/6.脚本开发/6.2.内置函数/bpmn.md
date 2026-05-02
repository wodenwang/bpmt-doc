# bpmn BPMN 模型辅助

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/flow/BpmnHelper.java`，类上标注 `@ScriptSupport("bpmn")`。脚本中通常以 `bpmn.方法名(...)` 调用。

解析 Activiti `BpmnModel`，获取节点、节点外连线和画布坐标信息。

| 函数签名 | 说明 |
| --- | --- |
| `getNode(BpmnModel bpmnModel, String id)` | 按节点 id 获取节点信息。 |
| `getNodes(BpmnModel bpmnModel, NodeType type)` | 按节点类型获取节点列表。 |
| `getNode(BpmnModel bpmnModel, NodeType type)` | 按节点类型获取第一个匹配节点。 |
| `getOuterSequenceFlows(BpmnModel bpmnModel, String id)` | 获取指定节点的外部连线。 |
| `getCoordinateInfo(BpmnModel bpmnModel)` | 获取 BPMN 图整体坐标范围。 |

<!-- CODE-CALIBRATION:END -->

