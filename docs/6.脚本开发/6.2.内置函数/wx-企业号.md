# 企业号

----------

## wx.qy
wx.qy 是对微信企业号级别的功能的封装，以下是功能列表：

- wx.qy.media | 获取wx.qy指定的临时素材管理功能集合
	- wx.qy.media.upload， 上传单个临时素材
	- wx.qy.media.uploads， 上传多个临时素材
	- wx.qy.media.download， 下载临时素材


## wx.agent
wx.agent 和 wx.agent('agentKey') 是对微信企业号应用级别的功能的封装，以下是功能列表：

### 消息相关

- wx.agent.text(map)，通过默认agent发送文本消息
- wx.agent.image(map)，通过默认agent发送图片消息
- wx.agent.voice(map)，通过默认agent发送语音消息
- wx.agent.video(map)， 通过默认agent发送视频消息
- wx.agent.news(map)， 通过默认agent发送新闻消息
- wx.agent.mpnews(map)，通过默认agent发送图文消息
- wx.agent.mpnews(mediaId)，通过默认agent发送图文消息


- wx.agent('agentKey').text(map)，通过agentKey指定的应用发送文本消息
- wx.agent('agentKey').image(map)，通过agentKey指定的应用发送图片消息
- wx.agent('agentKey').voice(map)，通过agentKey指定的应用发送语音消息
- wx.agent('agentKey').video(map)， 通过agentKey指定的应用发送视频消息
- wx.agent('agentKey').news(map)， 通过agentKey指定的应用发送新闻消息
- wx.agent('agentKey').mpnews(map)，通过agentKey指定的应用发送图文消息
- wx.agent('agentKey').mpnews(mediaId)，通过agentKey指定的应用发送图文消息

使用案例：

- 发送文本消息:

```groovy 
package wx.script.agent

def user = 'borball'
def text = '这是一段由groovy发出的消息'

def map=['user':user, 'text': text, 'safe': true]

wx.agent.text(map)

```

- 发送图文消息:

```groovy 
package wx.script.agent

def user = 'borball'

def title1 = '[发自Groovy] iTerm:让你的命令行也能丰富多彩'
def desc1 = 'iTerm:让你的命令行也能丰富多彩'
def url1 = 'http://swiftcafe.io/2015/07/25/iterm'
def picUrl1 = 'http://swiftcafe.io/images/iterm/1.png'

def map1 = ['title': title1, 'desc': desc1, 'url': url1, 'picUrl': picUrl1];

def title2 = '[发自Groovy] GitHub 漫游指南'
def desc2 = 'GitHub 漫游指南'
def url2 = 'https://github.com/phodal/github-roam'
def picUrl2 = 'http://7rf34y.com1.z0.glb.clouddn.com/user/7ec9b7dc0f494919b68d6f6be9504790/thumb'

def map2 = ['title': title2, 'desc': desc2, 'url': url2, 'picUrl': picUrl2];

def title3 = '[发自Groovy] "疯狂 HTML + CSS + JS 中 CSS 总结'
def desc3 = '疯狂 HTML + CSS + JS 中 CSS 总结'
def url3 = 'http://mzkmzk.github.io/blog/2015/10/18/amazeing-css.markdwon'
def picUrl3 = 'http://extjs.org.cn/screen_capture/extjswebbook/crazy-ajax-03.jpg'

def map3 = ['title': title3, 'desc': desc3, 'url': url3, 'picUrl': picUrl3];

def title4 = 'Facebook CEO 扎克伯格用中文讲了三个故事'
def desc4 = 'Facebook CEO 扎克伯格用中文讲了三个故事'
def url4 = 'http://www.cyzone.cn/a/20151024/282339.html'
def picUrl4 = 'http://img0.pconline.com.cn/pconline/1410/23/5615376_03_thumb.jpg'

def map4 = ['title': title4, 'desc': desc4, 'url': url4, 'picUrl': picUrl4];

def list = [map1, map2, map3, map4]
def news = ['user': user, 'news': list]

wx.agent.news(news)
```

### 永久素材相关

- wx.agent.upload(byte[])，上传单个永久素材到默认agent
- wx.agent.uploads(byte[])，上传多个永久素材到默认agent
- wx.agent.download('mediaId')，下载永久素材到默认agent


- wx.agent('agentKey').upload(byte[])，上传单个永久素材到agentKey指定的应用
- wx.agent('agentKey').uploads(byte[])，上传多个永久素材到agentKey指定的应用
- wx.agent('agentKey').download('mediaId')，下载永久素材到agentKey指定的应用


### 红包相关

- wx.agent.pay.red(map)，通过默认agent发送现金红包
- wx.agent('agentKey').pay.red(map)，通过agentKey指定的应用发送现金红包


使用案例：

- 单个现金红包

```groovy
package wx.script.agent.pay

def user = 'borball'
def activity = '恭喜发财[from groovy]'
def amount = 100
def remark = '发给borball'
def wishing = '恭喜发财[from agent]'
def sender = '创河软件企业号'

def map=['user':user, 'activity': activity, 'amount': amount, 'remark': remark, 'wishing': wishing, 'sender': sender]

wx.agent.pay.red(map)
```

- 裂变红包

```groovy
package wx.script.agent.pay

def user = 'woden'
def activity = '恭喜发财[from groovy]'
def amount = 600
def number = 5
def remark = '发给woden'
def wishing = '恭喜发财[from agent]'
def sender = '创河软件企业号'

def map=['user':user, 'activity': activity, 'number': number, 'amount': amount, 'remark': remark, 'wishing': wishing, 'sender': sender]

wx.agent.pay.red(map)
```

@by borball
