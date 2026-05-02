# wx 微信函数库

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/wx/WxHelper.java`，类上标注 `@ScriptSupport("wx")`。脚本中通常以 `wx.方法名(...)` 调用。

获取企业号、公众号、小程序相关辅助对象。

| 函数签名 | 说明 |
| --- | --- |
| `agent(String key)` | 见源码实现。 |
| `mp(String key)` | 见源码实现。 |
| `getQy()` | 获取企业号资源管理 |
| `app()` | 获取小程序资源管理 |

<!-- CODE-CALIBRATION:END -->



BPMT3.0 内置函数库 wx 提供了微信基础能力的封装，以下是所有的功能列表：

| 序号 | 函数 | 说明  |
| --- | --- | --- |
| 0 | wx.mp('mpKey') | 获取mpKey所指定的mp函数集合  |
| 1 | wx.qy | 获取当前系统配置的企业号函数集合  |
| 2 | wx.agent | 获取当前系统配置的企业号下默认的agent函数集合  |
| 3 | wx.agent('agentKey') | 获取当前系统配置的企业号下agentKey指定agent函数集合  |


@by borball
