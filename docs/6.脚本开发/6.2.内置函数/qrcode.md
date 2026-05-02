# qrcode 二维码

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/QRCodeHelper.java`，类上标注 `@ScriptSupport("qrcode")`。脚本中通常以 `qrcode.方法名(...)` 调用。

生成二维码文件、流、base64 图片，并支持尺寸和颜色配置。

| 函数签名 | 说明 |
| --- | --- |
| `file(String text)` | 默认的二维码 |
| `stream(String text)` | 见源码实现。 |
| `img(String text)` | 见源码实现。 |
| `file(String text, int width, int height)` | 可以设置长宽 |
| `stream(String text, int width, int height)` | 见源码实现。 |
| `img(String text, int width, int height)` | 见源码实现。 |
| `file(String text, int width, int height, int onColor, int offColor)` | 可以设置长宽和颜色 |
| `stream(String text, int width, int height, int onColor, int offColor)` | 见源码实现。 |
| `img(String text, int width, int height, int onColor, int offColor)` | 见源码实现。 |
| `from(String text)` | 也可以使用链式API |
| `Builder` | 见源码实现。 |

<!-- CODE-CALIBRATION:END -->

