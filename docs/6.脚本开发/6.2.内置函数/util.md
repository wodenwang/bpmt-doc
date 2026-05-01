# util 通用工具
BPMT通用的函数库,包含了比如说对于日期的操作函数;

## *util.compareDate* 计算两个时间之间的差值
    比较两个日期之间的差值;(前一个日期减去第二个日期)

#### 参数API ####
| 序号 | 参数类型 | 说明  |
|------|-------	-|-----|
| 1 | Date日期 | 入参一个想要比较的第一个日期 |
| 2 | Date日期 | 入参一个想要比较的第二个日期 |
| 3 | 字符串(可选) | 可选,默认差值为天;可以选择入参选择年月日时分等;<br>如年:"Y"/"y"; 月:"M"; 天:"D"/"d"(默认); 小时:"H"/"h"; 分:"m"; 秒:"s"; 毫秒:"S";
| 返回值 | 长整数 | 返回相应的差值,正或负 |

#### 示例1 : 对比2015/02/03和2014/05/03之间相差的天数
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

Calendar before = Calendar.getInstance();
before.set(Calendar.YEAR, 2014);
before.set(Calendar.MONTH, 5);
before.set(Calendar.DAY_OF_MONTH, 3);

return util.compareDate(before.getTime(),now.getTime());
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_1.png)

#### 示例2 : 对比2015/02/03和2014/05/03之间相差的月数
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

Calendar before = Calendar.getInstance();
before.set(Calendar.YEAR, 2014);
before.set(Calendar.MONTH, 5);
before.set(Calendar.DAY_OF_MONTH, 3);

return util.compareDate(before.getTime(),now.getTime(),"M");
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_2.png)

## *util.diffYear* 计算两个日期相差的年数
    比较两个日期之前相差的年数

#### 参数API ####
| 序号 | 参数类型 | 说明  |
|------|-------	-|-----|
| 1 | Date日期 | 入参一个想要比较的第一个日期 |
| 2 | Date日期 | 入参一个想要比较的第二个日期 |
| 返回值 | 长整数 | 返回相差的年数 |

#### 示例 1: 对比2015/02/03和2005/05/03之间相差的年数
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

Calendar before = Calendar.getInstance();
before.set(Calendar.YEAR, 2005);
before.set(Calendar.MONTH, 5);
before.set(Calendar.DAY_OF_MONTH, 3);

return util.diffYear(now.getTime(),before.getTime());
```

![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_3.png)

## *util.diffMonth* 计算两个日期相差的月数
    比较两个日期之间相差的月数

#### 参数API ####
| 序号 | 参数类型 | 说明  |
|------|-------	-|-----|
| 1 | Date日期 | 入参一个想要比较的第一个日期 |
| 2 | Date日期 | 入参一个想要比较的第二个日期 |
| 返回值 | 长整数 | 返回相差的月数 |

#### 示例 1:对比2015/02/03和2005/05/03之间相差的月数
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

Calendar before = Calendar.getInstance();
before.set(Calendar.YEAR, 2005);
before.set(Calendar.MONTH, 5);
before.set(Calendar.DAY_OF_MONTH, 3);

return util.diffMonth(now.getTime(),before.getTime());
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_4.png)

## *util.calDate*  日期加减计算
    对一个特定的日期进行加减计算(单位可选,默认为天)

#### 参数API ####
| 序号 | 参数类型 | 说明  |
|------|-------	-|-----|
| 1 | Date日期 | 输入待计算的日期 |
| 2 | 整数 | 对日期的操作数,正数为加,负数为减 |
| 3 | 字符串(可选) | 操作数的单位,可选,可以选择入参选择年月日时分等;<br>如年:"Y"/"y"; 月:"M"; 天:"D"/"d"(默认); 小时:"H"/"h"; 分:"m"; 秒:"s"; 毫秒:"S";
| 返回值 | 日期 | 返回计算过后的日期 |

#### 示例 1:对日期2015/02/03 进行加10天计算
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

return util.calDate(now.getTime(),10);
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_5.png)

#### 示例 2:对日期2015/02/03 进行加两年计算
```groovy
Calendar now = Calendar.getInstance();
now.set(Calendar.YEAR, 2015);
now.set(Calendar.MONTH, 2);
now.set(Calendar.DAY_OF_MONTH, 3);

return util.calDate(now.getTime(),2,"Y");
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/6.2.util.demo_6.png)

`by Chris`
