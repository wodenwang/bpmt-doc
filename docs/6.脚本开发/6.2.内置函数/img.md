# img 图片处理

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/platform/script/function/ImageHelper.java`，类上标注 `@ScriptSupport("img")`。脚本中通常以 `img.方法名(...)` 调用。

图片头像、base64、缩放、水印、旋转、合并等处理函数。

| 函数签名 | 说明 |
| --- | --- |
| `img(String text)` | 根据文字生成彩色图片(base64字符流) |
| `img(String text, Map<String, Object> option)` | 根据配置生成图片(base64字符流) 图片配置:； width: 200px,默认值200； height: 200px,默认值200； color:#ff88ff,留空则根据文字内容算出固定颜色； bg:true/false,默认true.false表示白色背景,color颜色的字体;true表示反转, color背景白色字体 |
| `head(Object file, int size)` | 根据图片生成头像 |
| `base64(Object file)` | 根据图片生成base64图片 |
| `save(String base64)` | base64图片另存为文件 |
| `byte2file(byte[] bytes, String type)` | 字节数组转文件 |
| `byte2base64(byte[] bytes, String type)` | 字节数组转base64 |
| `rotate(Object file, double rotation)` | 图片翻转 |
| `mark(Object file, Object waterMark)` | 加水印， 默认0.5f透明程度 |
| `mark(Object file, Object waterMark, float transparent)` | 加水印 透明程度 |
| `resize(Object file, int width, int height)` | 保持比例缩放 resize(file, 200, 300) 若图片横比200小，高比300小，不变 若图片横比200小，高比300大，高缩小到300，图片比例不变 若图片横比200大，高比300小，横缩小到200，图片比例不变 若图片横比200大，高比300大，图片按比例缩小，横为200或高为300 宽 高 |
| `resize(Object file, double scale)` | 按比例缩放 比例， 如0.5d |
| `forceResize(Object file, int width, int height)` | 强制按指定尺寸缩放 |
| `merge(Object... files)` | 合并多个图片, 生成一个640*640的图片 |
| `merge(String... files)` | 合并多个图片, 生成一个640*640的图片 base64图片 |

<!-- CODE-CALIBRATION:END -->

