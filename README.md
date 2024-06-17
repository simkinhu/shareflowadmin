# 属Xyhelper下项目ChatGPT-Share-Server系统外部接入的管理系统
项目地址：[chatgpt-share-server](https://github.com/xyhelper/chatgpt-share-server-deploy) 感谢xyhelper大佬的辛勤付出，敬礼！！！

# ShareFlow Admin（付费版本）

### 技术架构
- **后端**：JAVA （JDK17）
- **前端**：VUE3

### 部署方式
- **后端**：通过Docker拉取镜像
- **前端**：一键脚本替换list

### 付费版介绍

- 兼容性:完全兼容最新版的share系统，与chatgpt-share主程序互不干扰；
- 管理全权接管：实现对chatgpt-share后台管理的全面控制，账好添加，Usetoken管理；
- 体验优化：采用“登录即注册”机制，自动将用户输入的usertoken注册为新用户；
- 安全性：增强防刷策略，对登录和注册接口进行签名验证，确保只有通过签名验证的操作才能执行;
- 支付通道:支持微信官方支付、支付宝官方支付以及易支付，满足不同用户的支付需求;
- 收费模式：根据3.5和4.0实行分别收费策略;
- 兑换码：支持发放体验卡，体验卡兑换不能叠加;

详细介绍请参阅 [ShareFlow Admin 付费版介绍](https://mxlizdp0t8q.feishu.cn/docx/NjBZdHwr9ocMJMxOmXlcVxCqn0f?from=from_copylink)

### 演示站
- **前端**： [演示站前端](https://swg.3377ai.com/list)
- **后端**： [演示站后端](https://sadmin.3377ai.com/shareadmin)
  - **演示后台账户**：`admin`
  - **演示后台密码**：`admin123`
