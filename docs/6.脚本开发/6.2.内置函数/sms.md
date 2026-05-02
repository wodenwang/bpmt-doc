# sms 短信验证码

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/ali/SMSHelper.java`，类上标注 `@ScriptSupport("sms")`。脚本中通常以 `sms.方法名(...)` 调用。

阿里短信模板发送、验证码发送和验证码校验。

| 函数签名 | 说明 |
| --- | --- |
| `send(String templateId, String mobile, Map<String, String> params)` | 发送模板短信给指定手机号 |
| `code(String mobile)` | 发送验证码 |
| `verify(String mobile, String code)` | 校验验证码 |

<!-- CODE-CALIBRATION:END -->

