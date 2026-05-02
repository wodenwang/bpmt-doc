# xml XML 处理

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/XmlUtil.java`，类上标注 `@ScriptSupport("xml")`。脚本中通常以 `xml.方法名(...)` 调用。

XML 文本、文件、流等输入解析为 XmlPath。

| 函数签名 | 说明 |
| --- | --- |
| `from(String xml)` | 把xml文本解析为XmlPath http://static.javadoc.io/com.jayway.restassured/xml-path/2.8.0/com/jayway/restassured/path/xml/XmlPath.html |
| `from(InputStream stream)` | 把stream指代的文本解析为XmlPath http://static.javadoc.io/com.jayway.restassured/xml-path/2.8.0/com/jayway/restassured/path/xml/XmlPath.html |
| `from(InputSource source)` | 把source指代的文本解析为XmlPath http://static.javadoc.io/com.jayway.restassured/xml-path/2.8.0/com/jayway/restassured/path/xml/XmlPath.html |
| `from(File file)` | 把file指代的文本解析为XmlPath http://static.javadoc.io/com.jayway.restassured/xml-path/2.8.0/com/jayway/restassured/path/xml/XmlPath.html |
| `from(Reader reader)` | 把reader指代的文本解析为XmlPath http://static.javadoc.io/com.jayway.restassured/xml-path/2.8.0/com/jayway/restassured/path/xml/XmlPath.html |

<!-- CODE-CALIBRATION:END -->

