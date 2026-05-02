# store 外部存储

<!-- CODE-CALIBRATION:START -->

## 当前代码校准

来源：`bpmt-lite/platform/src/main/java/com/riversoft/platform/store/StoreHelper.java`，类上标注 `@ScriptSupport("store")`。脚本中通常以 `store.方法名(...)` 调用。

获取默认或外部 Redis，以及外部数据库函数对象。

| 函数签名 | 说明 |
| --- | --- |
| `redis()` | 默认redis |
| `redis(String key)` | 外部redis |
| `db(String key)` | 外部数据库函数库 |

<!-- CODE-CALIBRATION:END -->

