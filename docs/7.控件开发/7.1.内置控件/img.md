# img 图片展示(仅用于展示)
img图片展示控件

当前实现为 `bpmt-lite/platform/src/main/java/com/riversoft/widget/platform/Img.java`。该类继承 `FileManagerWidget`，而 `FileManagerWidget` 实现了 `com.riversoft.core.web.widget.Widget`，因此 `img` 是正式控件。

`img` 通过 `@WidgetAnnotation(cmd = "img", ftl = "classpath:widget/{mode}/platform/img.ftl")` 注册。模板位置包括：

- `bpmt-lite/platform/src/main/resources/widget/xhtml/platform/img.ftl`
- `bpmt-lite/platform/src/main/resources/widget/h5/platform/img.ftl`

该控件只用于展示图片，不支持录入。代码中当状态不是 `readonly` 时会抛出“该控件不支持录入”配置异常。

## 效果展示
![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.img1.png)

## 参数API
参数说明(待补充)
## 界面脚本
界面脚本(待补充)
## 示例1:展示员工的照片
通过'img[int number]'调用

![](../../assets/gitbook/7.控件开发/7.1.内置控件/7.1.img2.png)

`by jimlin`
