# json JSON 处理

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/core/script/function/JsonUtil.java`，类上标注 `@ScriptSupport("json")`。脚本中通常以 `json.方法名(...)` 调用。

JSON 序列化和 JsonPath 解析函数。

| 函数签名 | 说明 |
| --- | --- |
| `to(Object o)` | 对象格式化为JSON字符串 |
| `from(String json)` | 把字符串解析为JsonPath http://static.javadoc.io/com.jayway.restassured/json-path/2.8.0/com/jayway/restassured/path/json/JsonPath.html |
| `from(URL url)` | 把URL指代的内容解析为JsonPath http://static.javadoc.io/com.jayway.restassured/json-path/2.8.0/com/jayway/restassured/path/json/JsonPath.html |
| `from(InputStream stream)` | 把stream指代的内容解析为JsonPath http://static.javadoc.io/com.jayway.restassured/json-path/2.8.0/com/jayway/restassured/path/json/JsonPath.html |
| `from(File file)` | 把文件指代的内容解析为JsonPath http://static.javadoc.io/com.jayway.restassured/json-path/2.8.0/com/jayway/restassured/path/json/JsonPath.html |
| `from(Reader reader)` | 把reader指代的内容解析为JsonPath http://static.javadoc.io/com.jayway.restassured/json-path/2.8.0/com/jayway/restassured/path/json/JsonPath.html |

<!-- CODE-CALIBRATION:END -->

