# date 日期/时间选择框
用于选择日期/时间的控件。
## 效果展示 ##
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.date1.png)
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.date2.png)

## 参数API ##
| 序号 | 类型 | 说明  |
|:------:|:--------:|-------------------------|
| 1		|   可选 	|可选值:<br>date:默认值,格式如yyyy-MM-dd<br>datetime:格式如yyyy-MM-dd HH:mm:ss<br>time:格式如HH:mm:ss
## 界面脚本 ##
|函数| 序号 | 类型 | 说明  |描述|
|:------:|:--------:|:--------:|:--------|:--------|
|init |无 |无 |无 |将控件设置为初始化状态.<br>调用示例:Widget.init($form,name);|
|enabled|1| 可选| true:可用,默认值;false:不可用.|将控件设置为可用/不可用(disabled)状态.<br>调用示例:Widget.enabled($form,name);|
|disabled |无 |无 |无 |将控件设置为不可用状态.<br>调用示例:Widget.disabled($form,name);|
|val |1 |可选 |目标值|设置控件值.当val未传入时返回控件值.<br>调用示例:Widget.val($form,name,’1’);|
|change |1 |必选 |回调函数,入参$this是控件对应的jquery对象. |设置控件事件回调函数.控件触发blur时调用.<br>调用示例:<br>Widget.change($form,name,function($this){<br>alert($this.val());<br>});|

##示例1:通过日期控件查询##
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.date3.png)

`by jimlin`
