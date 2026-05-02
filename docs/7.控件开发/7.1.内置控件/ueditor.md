# ueditor 富文本编辑框
用于编辑富文本的控件。
## 效果展示
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.ueditor1.png)
## 参数API
*无参数，不支持动态入参*
## 界面脚本
|函数| 序号 | 类型 | 说明  |描述|
|:------:|:--------:|:--------:|:--------|:--------|
|init |无 |无 |无 |将控件设置为初始化状态.<br>调用示例:Widget.init($form,name);|
|enabled|1| 可选| true:可用,默认值;false:不可用.|将控件设置为可用/不可用(disabled)状态.<br>调用示例:Widget.enabled($form,name);|
|disabled |无 |无 |无 |将控件设置为不可用状态.<br>调用示例:Widget.disabled($form,name);|
|val |1 |可选 |目标值|设置控件值.当val未传入时返回控件值.<br>调用示例:Widget.val($form,name,’1’);|
|change |1 |必选 |回调函数,入参$this是控件对应的jquery对象. |设置控件事件回调函数.控件触发blur时调用.<br>调用示例:<br>Widget.change($form,name,function($this){<br>alert($this.val());<br>});|

## 示例1:调用ueditor编辑一张报销单
在费用报销时可以编辑报销单让报销人填写
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.ueditor2.png)

`by jimlin`
