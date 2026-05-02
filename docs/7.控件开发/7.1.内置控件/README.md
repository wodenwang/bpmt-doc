# 内置控件

内置控件由 `bpmt-lite/platform/src/main/java/com/riversoft/widget` 下的 Java 类提供处理逻辑，并通过 `bpmt-lite/platform/src/main/resources/widget/{mode}/.../*.ftl` 渲染页面。`{mode}` 由运行入口替换为 `xhtml` 或 `h5`。

判断一个类是否为控件时，不只看是否直接 `implements Widget`，还要看父类是否已经实现 `Widget`。例如 `img` 继承 `FileManagerWidget`，`icon` 继承 `DefaultWidget`，二者都应纳入控件范围。

当前已在 `doc/widget` 中有正式说明的内置控件包括：

| 控件 | 说明文件 | 备注 |
| --- | --- | --- |
| `text` | `doc/widget/text.html` | 普通文本框 |
| `textarea` | `doc/widget/textarea.html` | 多行文本框 |
| `date` | `doc/widget/date.html` | 日期/时间选择 |
| `editor` | `doc/widget/editor.html` | 普通富文本编辑框 |
| `ueditor` | `doc/widget/ueditor.html` | UEditor 富文本编辑框 |
| `select` | `doc/widget/select.html` | 下拉框 |
| `filemanager` | `doc/widget/filemanager.html` | 单文件上传 |
| `multifilemanager` | `doc/widget/multifilemanager.html` | 多文件上传 |
| `user` | `doc/widget/user.html` | 用户选择 |
| `multiuser` | `doc/widget/multiuser.html` | 用户多选 |
| `group` | `doc/widget/group.html` | 组织选择 |
| `multigroup` | `doc/widget/multigroup.html` | 组织多选 |
| `form` | `doc/widget/form.html` | 自定义表单 |

旧 GitBook 已覆盖但 `doc/widget` 没有正式说明的页面包括 `checkbox`、`radio`、`multiselect`、`tree`、`colorpicker`、`icon`、`key`、`img`、`office`。这些控件已经按实现关系识别到，页面当前保留旧说明，后续应继续按代码和模板复核参数。
