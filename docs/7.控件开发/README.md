# 控件

本章说明 BPMT 表单控件的使用和开发方式。控件不是只靠静态文档维护，当前实现以实现 `Widget` 接口的 Java 类为控件处理器，并在启动时扫描 Java 注解、按运行模式动态加载 `widget` 目录下的 FreeMarker 模板。

## 控件识别口径

重新核对代码后，本章采用下面口径识别控件：

1. 类直接 `implements com.riversoft.core.web.widget.Widget`。
2. 类继承已实现 `Widget` 的父类，例如 `DefaultWidget` 或 `FileManagerWidget`。
3. 类带有 `@WidgetAnnotation`，并通过 `cmd` 暴露控件命令。

其中 `DefaultWidget` 位于 `bpmt-lite/platform/src/main/java/com/riversoft/core/web/widget/DefaultWidget.java`，已实现 `Widget`；`FileManagerWidget` 位于 `bpmt-lite/platform/src/main/java/com/riversoft/widget/platform/FileManagerWidget.java`，也已实现 `Widget`。因此继承这两个父类的 `img`、`icon`、`colorpicker`、`key`、`qrcode`、`tree` 等类都应识别为控件。

例如：

| 控件 | 实现关系 | 注解命令 | 模板 |
| --- | --- | --- | --- |
| `img` | `Img extends FileManagerWidget`，`FileManagerWidget implements Widget` | `@WidgetAnnotation(cmd = "img")` | `widget/{mode}/platform/img.ftl` |
| `icon` | `Icon extends DefaultWidget`，`DefaultWidget implements Widget` | `@WidgetAnnotation(cmd = "icon")` | `widget/{mode}/common/icon.ftl` |

## 当前实现入口

控件加载由 `bpmt-lite/platform/src/main/java/com/riversoft/core/web/widget/AnnotatedWidgetProcessorsHolder.java` 初始化：

1. 扫描 `com.riversoft` 包下带 `@WidgetAnnotation` 的类。
2. 以 `@WidgetAnnotation.cmd()` 注册控件命令，例如 `text`、`select`、`combo`。
3. 以 `@WidgetAnnotation.ftl()` 记录模板路径。当前大多数控件使用 `classpath:widget/{mode}/.../*.ftl`，运行时把 `{mode}` 替换为 `xhtml` 或 `h5`。
4. 读取控件说明文档。若注解未显式指定 `doc`，默认查找 `classpath:doc/widget/{cmd}.html`。

控件命令由 `bpmt-lite/platform/src/main/java/com/riversoft/core/web/widget/FormWidget.java` 解析，常见格式如下：

```text
text
text[100px]
date[date;100px]
select[YES_NO]
select[YES_NO(请选择)]
select[YES_NO]{required:true}
combo[控件主键]
```

其中：

- `cmd` 是控件命令。
- `[]` 内是固定参数，多个参数用 `;` 分隔。
- `{}` 内是校验参数。
- 动态参数由调用侧传入，模板中可通过 `dyncParams` 等上下文使用。

## 当前控件清单

下表按 `Widget` 实现关系、`@WidgetAnnotation` 和 `platform/src/main/resources/widget` 核对。详细参数优先以 `bpmt-lite/platform/src/main/resources/doc/widget/*.html` 为准；没有该文件的控件，当前文档主要来自旧 GitBook 或代码/模板核对。

| 控件命令 | 类型 | 处理类 | 实现关系 | 模板 | `doc/widget` | 本章状态 |
| --- | --- | --- | --- | --- | --- | --- |
| `text` | 基础输入 | `com.riversoft.widget.common.Text` | 继承 `DefaultWidget` | `widget/{mode}/common/text.ftl` | 有 | 已有 |
| `textarea` | 基础输入 | `com.riversoft.widget.common.TextArea` | 继承 `DefaultWidget` | `widget/{mode}/common/textarea.ftl` | 有 | 已有 |
| `date` | 基础输入 | `com.riversoft.widget.common.Date` | 直接实现 `Widget` | `widget/{mode}/common/date.ftl` | 有 | 已有 |
| `editor` | 基础输入 | `com.riversoft.widget.common.Editor` | 直接实现 `Widget` | `widget/{mode}/common/editor.ftl` | 有 | 已补 |
| `ueditor` | 基础输入 | `com.riversoft.widget.common.UEditor` | 直接实现 `Widget` | `widget/{mode}/common/ueditor.ftl` | 有 | 已有 |
| `select` | 字典/数据选择 | `com.riversoft.widget.db.Select` | 直接实现 `Widget` | `widget/{mode}/db/select.ftl` | 有 | 已有 |
| `multiselect` | 字典/数据选择 | `com.riversoft.widget.db.MultiSelect` | 直接实现 `Widget` | `widget/{mode}/db/multiselect.ftl` | 无 | 已识别，已有旧页 |
| `radio` | 字典/数据选择 | `com.riversoft.widget.db.Radio` | 直接实现 `Widget` | `widget/{mode}/db/radio.ftl` | 无 | 已识别，已有旧页 |
| `checkbox` | 字典/数据选择 | `com.riversoft.widget.db.CheckBox` | 直接实现 `Widget` | `widget/{mode}/db/checkbox.ftl` | 无 | 已识别，已有旧页 |
| `tree` | 字典/数据选择 | `com.riversoft.widget.db.Tree` | 继承 `DefaultWidget` | `widget/{mode}/db/tree.ftl` | 无 | 已识别，已有旧页 |
| `filemanager` | 平台控件 | `com.riversoft.widget.platform.FileManagerWidget` | 直接实现 `Widget` | `widget/{mode}/platform/filemanager.ftl` | 有 | 已有 |
| `multifilemanager` | 平台控件 | `com.riversoft.widget.platform.MultiFileManager` | 继承 `FileManagerWidget` | `widget/{mode}/platform/filemanager.ftl` | 有 | 已有 |
| `user` | 平台控件 | `com.riversoft.widget.platform.User` | 直接实现 `Widget` | `widget/{mode}/platform/user.ftl` | 有 | 已有 |
| `multiuser` | 平台控件 | `com.riversoft.widget.platform.MultiUser` | 直接实现 `Widget` | `widget/{mode}/platform/multiuser.ftl` | 有 | 已有 |
| `group` | 平台控件 | `com.riversoft.widget.platform.Group` | 直接实现 `Widget` | `widget/{mode}/platform/group.ftl` | 有 | 已有 |
| `multigroup` | 平台控件 | `com.riversoft.widget.platform.MultiGroup` | 直接实现 `Widget` | `widget/{mode}/platform/multigroup.ftl` | 有 | 已有 |
| `form` | 平台控件 | `com.riversoft.widget.platform.Form` | 直接实现 `Widget` | `widget/{mode}/platform/form.ftl` | 有 | 已有 |
| `img` | 展示控件 | `com.riversoft.widget.platform.Img` | 继承 `FileManagerWidget` | `widget/{mode}/platform/img.ftl` | 无 | 已识别，已有旧页 |
| `office` | 展示控件 | `com.riversoft.widget.platform.OfficeWidget` | 继承 `FileManagerWidget` | `widget/{mode}/platform/office.ftl` | 无 | 已识别，已有旧页 |
| `colorpicker` | 开发辅助 | `com.riversoft.widget.common.ColorPicker` | 继承 `DefaultWidget` | `widget/{mode}/common/colorpicker.ftl` | 无 | 已识别，已有旧页 |
| `icon` | 开发辅助 | `com.riversoft.widget.common.Icon` | 继承 `DefaultWidget` | `widget/{mode}/common/icon.ftl` | 无 | 已识别，已有旧页 |
| `key` | 开发辅助 | `com.riversoft.widget.platform.Key` | 继承 `DefaultWidget` | `widget/{mode}/platform/key.ftl` | 无 | 已识别，已有旧页 |
| `combo` | 自定义控件 | `com.riversoft.widget.custom.Combo` | 直接实现 `Widget` | `widget/{mode}/custom/combo.ftl` | 有 | 已有 |
| `detail` | 自定义控件 | `com.riversoft.widget.custom.Detail` | 直接实现 `Widget` | `widget/{mode}/custom/detail.ftl` | 有 | 已有 |
| `qrcode` | 展示/辅助 | `com.riversoft.widget.common.QrCode` | 继承 `DefaultWidget` | `widget/{mode}/common/qrcode.ftl` | 无 | 已识别，缺页 |
| `codemirror` | 开发辅助 | `com.riversoft.widget.common.CodeMirror` | 继承 `DefaultWidget` | `widget/{mode}/common/codemirror.ftl` | 无 | 已识别，缺页 |
| `style` | 开发辅助 | `com.riversoft.widget.common.Style` | 直接实现 `Widget` | `widget/{mode}/common/style.ftl` | 无 | 已识别，缺页 |
| `template` | 自定义模板 | `com.riversoft.widget.custom.TemplateWidget` | 直接实现 `Widget` | 动态资源 | 无 | 已识别，缺页 |
| `pri` | 系统控件 | `com.riversoft.widget.sys.Pri` | 直接实现 `Widget` | `widget/{mode}/sys/pri.ftl` | 无 | 已识别，缺页 |
| `prigroup` | 系统控件 | `com.riversoft.widget.sys.PriGroup` | 直接实现 `Widget` | `widget/{mode}/sys/prigroup.ftl` | 无 | 已识别，缺页 |
| `view` | 系统控件 | `com.riversoft.widget.sys.View` | 直接实现 `Widget` | `widget/{mode}/sys/view.ftl` | 无 | 已识别，缺页 |
| `widget` | 系统控件 | `com.riversoft.widget.sys.WidgetDesign` | 继承 `DefaultWidget` | `widget/{mode}/sys/widget.ftl` | 无 | 已识别，缺页 |
| `wxcommand` | 微信辅助 | `com.riversoft.widget.sys.WxCommand` | 直接实现 `Widget` | `widget/{mode}/sys/wxcommand.ftl` | 无 | 已识别，缺页 |

## 已发现的错漏

- `editor` 在代码和 `doc/widget/editor.html` 中存在，但旧文档没有页面和目录入口，已补为 `7.1.内置控件/editor.md`。
- 当前 `doc/widget` 只覆盖 `combo`、`date`、`detail`、`editor`、`filemanager`、`form`、`group`、`multifilemanager`、`multigroup`、`multiuser`、`select`、`text`、`textarea`、`ueditor`、`user` 这 15 个控件。
- `img`、`icon` 已按实现关系确认是控件：`img` 继承 `FileManagerWidget`，`icon` 继承 `DefaultWidget`，并且两者都有 `@WidgetAnnotation` 和模板。
- 旧文档已有但 `doc/widget` 没有正式说明的控件包括 `checkbox`、`radio`、`multiselect`、`tree`、`colorpicker`、`icon`、`key`、`img`、`office`，这些页面当前保留旧说明，后续应继续按 Java 处理类和 `.ftl` 模板补参数细节。
- 代码和模板中存在但当前用户文档还没有独立页面的控件包括 `qrcode`、`codemirror`、`style`、`template`、`pri`、`prigroup`、`view`、`widget`、`wxcommand`。这些更偏内部/系统/开发辅助控件，是否纳入用户章节需要结合实际菜单入口再确认。
- H5 模板只覆盖部分控件；`xhtml` 模板覆盖更完整。移动端可用性不能只看控件 Java 类是否存在，还要看 `widget/h5/...` 下是否有对应模板。
