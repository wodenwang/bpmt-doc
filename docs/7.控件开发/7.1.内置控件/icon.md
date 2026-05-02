# icon 图标选择器
用于选择图标的控件。

当前实现为 `bpmt-lite/platform/src/main/java/com/riversoft/widget/common/Icon.java`。该类继承 `DefaultWidget`，而 `DefaultWidget` 实现了 `com.riversoft.core.web.widget.Widget`，因此 `icon` 是正式控件。

`icon` 通过 `@WidgetAnnotation(cmd = "icon", ftl = "classpath:widget/{mode}/common/icon.ftl")` 注册。当前模板位于 `bpmt-lite/platform/src/main/resources/widget/xhtml/common/icon.ftl`，没有对应的 `doc/widget/icon.html`，所以本页仍以旧 GitBook 内容为基础。

## 效果展示 ##
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.icon1.png)

## 参数API ##
| 序号 | 类型 | 说明  |
|:------:|:--------:|-------------------------|
| 1		|   可选 	|选择图标风格.可选值如下:<br>jquery: 默认值.jquery ui风格图标,仅用于系统按钮.<br>sys: 扩展图标,可用于菜单,自定义展示等
## 界面脚本 ##
界面脚本(待补充)
##示例1:为一个菜单配置一个图标##
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.icon2.png)
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.icon3.png)

`by jimlin`
