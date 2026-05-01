# 公众号

----------

## wx.mp
wx.mp('mpKey') 是对微信公众号功能的封装，以下是功能列表：

### 群发消息

- wx.mp('mpKey').text(map)，群发文本消息到mpKey指定的公众号
- wx.mp('mpKey').image(map)，群发图片消息到mpKey指定的公众号
- wx.mp('mpKey').voice(map)，群发语音消息到mpKey指定的公众号
- wx.mp('mpKey').card(map)，群发卡券消息到mpKey指定的公众号
- wx.mp('mpKey').video(map)，群发视频消息到mpKey指定的公众号
- wx.mp('mpKey').mpnews(map)，群发图文消息到mpKey指定的公众号


### 客服接口

- wx.mp('mpKey').care.text(map)，通过客服接口发送文本消息到mpKey指定的公众号
- wx.mp('mpKey').care.image(map)，通过客服接口发送图片消息到mpKey指定的公众号
- wx.mp('mpKey').care.voice(map)，通过客服接口发送语音消息到mpKey指定的公众号
- wx.mp('mpKey').care.video(map)，通过客服接口发送视频消息到mpKey指定的公众号
- wx.mp('mpKey').care.news(map)，通过客服接口发送图文消息到mpKey指定的公众号
- wx.mp('mpKey').care.mpnews(map)，通过客服接口发送图文消息到mpKey指定的公众号


### 永久素材管理

TODO:


### 临时素材管理

- wx.mp('mpKey').media.upload(byte[])，上传单个临时素材到mpKey指定的公众号
- wx.mp('mpKey').media.uploads(byte[])，上传多个临时素材到mpKey指定的公众号
- wx.mp('mpKey').media.download('mediaId')，下载mediaId指定的临时素材


### 支付相关

- wx.mp('mpKey').pay.red(map)，通过mpKey指定的公众号发送现金红包


使用案例：

- 单个红包

```groovy
package wx.script.mp.pay

def user = 'oELhlt95_6--RMo3GdZGcbHezFkw' //open ID
def activity = '恭喜发财[from groovy]'
def amount = 100
def remark = '发给Charm'
def wishing = '恭喜发财[from 创河服务号]'
def sender = '创河软件服务号'

def map=['user':user, 'activity': activity, 'amount': amount, 'remark': remark, 'wishing': wishing, 'sender': sender]

wx.mp('k1YOwdUYL9X').pay.red(map)

```

- 裂变红包

```groovy
package wx.script.agent.pay

def user = 'oELhlt95_6--RMo3GdZGcbHezFkw' //open ID
def activity = '恭喜发财[from groovy]'
def amount = 600
def number = 5
def remark = '发给woden'
def wishing = '恭喜发财[from 创河服务号]'
def sender = '创河软件服务号'

def map=['user':user, 'activity': activity, 'number': number, 'amount': amount, 'remark': remark, 'wishing': wishing, 'sender': sender]

wx.mp('k1YOwdUYL9X').pay.red(map)
```

### 二维码

- wx.mp('mpKey').tickets.temporary(3600, 100)，生成临时二维码
- wx.mp('mpKey').tickets.permanent(100)，生成永久二维码
- wx.mp('mpKey').tickets.permanent(‘scene string’)，生成永久二维码

### URL工具


@by borball
