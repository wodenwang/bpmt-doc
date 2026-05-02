# file 文件操作

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/platform/web/FileHelper.java`，类上标注 `@ScriptSupport("file")`。脚本中通常以 `file.方法名(...)` 调用。

在脚本中读取、转换、下载、编码上传附件。

| 函数签名 | 说明 |
| --- | --- |
| `disk(Object file)` | 将文件转换成disk类型(存放在磁盘) |
| `db(Object file)` | 将文件转换成db类型(存放在数据库) |
| `files(byte[] file)` | 获取可以编程的文件(列表) |
| `file(byte[] file)` | 获取可以编程的文件 |
| `url(Object file)` | 获取下载链接 |
| `base64(Object file)` | 生成base64字符 |
| `request(String name)` | 从request获取文件 |

<!-- CODE-CALIBRATION:END -->

