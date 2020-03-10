<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-03-07 13:04:48
 * @LastEditors: wenq
 * @LastEditTime: 2020-03-10 22:35:12
 -->
### Electron demos

# Electron学习笔记

## 相关资源传送门
- [Electron 开发桌面应用介绍](https://github.com/electron)
- [Electron 快速上手](https://github.com/electron/electron-quick-start)
- [Electron 应用架构](https://www.electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes)
- [Electron 文档/API](https://www.electronjs.org/docs/api)
- [Electron 打包](https://segmentfault.com/a/1190000013924153)
  
`说明：electron应用的开发、调试、打包、部署等全套内容，在其官方文档中都有包含，不必去网上一点一点散乱的去查找。`

### **`对Electron的理解:`**
```
electron简单理解是：chromium + nodeJS、
开发语言：js、
chromium：UI渲染、
nodeJS：本地api交互能力等。
```

## **`Electron开发疑问:`**
- 1 怎样创建electron应用
- 2 electron相关能力怎样使用(标准api、访问本地资源等)
- 3 electron怎样为各平台打包(window、macOS)
---

**`疑问1. 怎样创建electron应用`**

与创建一个前端项目或者nodeJS项目类似，步骤大致如下：
> * 1.使用指令 `npm init` 初始化一个项目
> * 2.使用指令 `npm install --save-dev electron` 安装electron安装包
> * 3.设置程序入口文件‘main.js’、主窗口文件‘index.html’
> * 4.修改pakage.json配置文件，添加electron程序启动脚本指令`start: electron .`
> * 5.在命令行中使用npm指令`npm run start`启动electron应用程序(后续打包好了，就直接可以双击其exe或其他快捷方式启动)

**`疑问2. electron相关能力怎样使用(标准api、访问本地资源等)`**
> * electron本身提供了标准api供开发者使用，且electron集成了nodeJS，所以node相关接口在electron里也能使用
> * electron中API具体使用方式为：？？？？？---待完善

**`疑问3 electron怎样为各平台打包(window、macOS)`** 
> * 可以使用`electron-pakager`或`electron-builder`打包工具对其进行打包
> * builder比pakager打包具有更多优点(入隐藏源代码、多平台支持等)
> * 打包具体操作为：？？？？？---待完善

---
# ` [重点]` 对Electron整体架构的理解

xxx？？
---待完善