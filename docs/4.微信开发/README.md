# 微信开发

BPMT3.0 提供了微信公众平台（订阅号，服务号和企业号）以及微信支付（红包）相关的配置管理工具，内置函数等相关功能，BPMT用户可以使用这些功能开发配置出各式各样的基于微信的业务场景。


## 微信公众平台

- 公众号(订阅号、服务号)
- 企业号

参考：[腾讯官方](http://kf.qq.com/faq/120911VrYVrA130805byM32u.md "腾讯官方")


以下是公众号和企业号中可能会使用到的开发相关概念：

- appId和appSecret(corpId和corpSecret)
	
	公众账号申请成功之后会得到一个appId和appSecret(企业号为corpId和corpSecret)，可在微信公众平台后台看到。appId和appSecet将会用于几乎所有需要和微信交互的场景。

- agent
	
	微信企业号特有概念，agent是指微信企业号下面的子应用，一个企业号可以有多个应用，每个应用对应不同的使用场景。

- callback URL

	开发者用来接收微信消息和事件的接口URL，用户在微信中和公众号企业号中交互将最终通过该URL来完成。

- token和EncodingAESKey

	Token可由开发者可以任意填写，用作生成签名（该Token会和接口URL中包含的Token进行比对，从而验证安全性）。EncodingAESKey由开发者手动填写或随机生成，将用作消息体加解密密钥。

更多参考：

[公众平台开发者文档](http://mp.weixin.qq.com/wiki/home/index.md)

[企业号开发者文档](http://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5)


## 微信支付

BPMT3.0中目前只提供了微信支付中现金红包的功能，可以调用内置函数通过企业号或者公众号来发送普通现金红包或者裂变红包。

下面是微信支付中开发相关概念， 在公众号或者企业号微信支付获批之后微信会发送审批邮件，邮件中包含一下相关信息：

- 商户ID

	微信支付商户号，在邮件中可得。

- API证书

	调用微信支付的SDK需要API证书，该证书可以在邮件中可得下载指引，证书下载完毕后需要存放在BPMT安装目录。

- API秘钥

	API秘钥需要在微信商户平台后台进行设置。

- API证书密码

	微信支付的API证书密码，默认和商户ID一样。

更多参考：[微信商户平台开发者文档](https://pay.weixin.qq.com/wiki/doc/api/index.md)


@by borball
