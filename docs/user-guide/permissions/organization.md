---
source: 旧 GitBook
source_path: 8.用户权限/8.1.组织架构.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---

# 组织架构

> 迁移状态：本文来自旧 GitBook，已迁入新文档结构，尚未逐项对照 `bpmt-lite v1.3.0` 权限 UI 和数据校准。

组织架构是企业的流程运转、部门设置及职能规划等最基本的结构依据,是BPMT系统权限管理的基础。
##创建系统组织架构
BMPT的组织架构由【组织架构管理】、【角色管理】、【用户管理】3部分组成。

举例:天天贸易公司的组织架构如下图,如何在系统上建立?
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_1.jpg)
####创建组织
功能设置>菜单>组织架构>组织架构管理
注意:组织KEY可以由系统自动生成，但建议自己填写，方便以后管理。
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_2.png)

![](../../assets/legacy-gitbook/8-permissions/8.1_demo_3.png)

拖动[销售部]放置在[天天贸易有限公司]里面，并点击保存位置。
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_4.png)

同样的我们按照上面的做法把[天天贸易有限公司]的组织建立起来。
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_5.png)

建好了组织，那么角色如何创建？假如[销售部]有[销售经理]、[销售助理]该如何添加？
#### 添加角色
功能设置>菜单>组织架构>角色管理
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_6.png)
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_7.png)
[销售经理]和[销售助理]这两个角色创建完成，如何将这两个角色“下挂”到[销售部]下面？
#####分配角色
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_8.png)
注意：只有创建完成的角色在[分配角色]里面才能选到。

#### 创建用户
功能设置>菜单>组织架构>用户管理
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_9.png)
* 填写提示：
[用户名]是系统登录名，[用户名]、[展示名]和[密码]均为必填项；
[通知方式]选择绑定邮箱，如果系统上有该用户待处理的任务时系统会以邮件的方式提醒用户登录系统处理；
[接收范围]系统推送的任务分个人任务和群组任务。
#####分配用户
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_10.png)

##用户登录
退出系统，用新建的用户登录系统
![](../../assets/legacy-gitbook/8-permissions/8.1_demo_11.png)


```by Kim```