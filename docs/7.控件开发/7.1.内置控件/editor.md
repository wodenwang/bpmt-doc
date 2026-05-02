# editor 富文本编辑框

`editor` 是普通富文本编辑框控件，对应实现为 `bpmt-lite/platform/src/main/java/com/riversoft/widget/common/Editor.java`，模板为 `bpmt-lite/platform/src/main/resources/widget/xhtml/common/editor.ftl`。

当前参数说明以 `bpmt-lite/platform/src/main/resources/doc/widget/editor.html` 为准。

## 固定参数

| 序号 | 类型 | 描述 |
| --- | --- | --- |
| 1 | 可选 | 宽度。例如 `editor[800px]` 表示宽度 800 像素；`editor[90%]` 表示宽度占外部区域 90%。 |
| 2 | 可选 | 高度。例如 `editor[600px;400px]` 表示宽度 600 像素、高度 400 像素；`editor[null;200px]` 表示宽度使用系统默认值、高度 200 像素。 |

## 动态参数

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| 无 | 无 | `doc/widget/editor.html` 未定义动态参数。 |

## 页面 JS API

| 名称 | 参数说明 | 描述 |
| --- | --- | --- |
| `init()` | 无 | 将控件设置为初始化状态。调用示例：`Widget.init($form,name);` |
