# mail 邮件操作
mail函数为发送邮件函数库。

## mail.systemSend ##
```
通过mail.systemSend发送系统邮件。
```
#### 参数API ####
| 序号 | 参数类型 | 说明  |
|:--:|:--:|:--|
| 1	| 字符串 | 邮件标题。|
| 2	| 字符串 | 邮件内容。 |
| 3...N	| 字符串 | 接收邮箱。 |
|返回值 | 无 |无|

## 相关配置 ##
```
需要在【控制面板】-【邮箱设置】，配置对应的发送服务器、接收服务器，系统账号。
协议配置参考对应邮箱服务器的协议进行配置，比如21cn.com的邮箱，发送协议为smtp协议，服务器地址为：smtp.21cn.com；比如接收服务器，服务器地址为pop.21cn.com。
```

![](../../assets/gitbook/6.脚本开发/6.2.内置函数/mail_systemSend1.png)

###示例1：
```groovy
mail.systemSend("river邮件", "您好，这是一封来自river的邮件。", "111@qq.com", "222.qq.com");
```
![](../../assets/gitbook/6.脚本开发/6.2.内置函数/mail_systemSend2.png)
<br/>
`by Wilmer`
