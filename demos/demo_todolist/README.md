<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-03-07 13:07:01
 * @LastEditors: wenq
 * @LastEditTime: 2020-03-10 22:40:39
 -->

### electron学习官方文档
[传送门](https://www.electronjs.org/docs/tutorial/first-app)

## demo需求实现说明
- 1 一个主界面a，主界面有：主菜单、内容清单列表；
- 2 具体菜单内容为：新增、删除、清空、退出；
- 3 点击‘新增’，会弹出另外一个界面b。界面b有输入框+按钮，输入框中输入内容，点击按钮，输入内容作为一个子项添加到主界面a的列表中，同时关闭界面b；
- 4 点击‘删除’，删掉主界面a中选中的某项目；
- 5 点击‘清空’，则清空主界面a中列表里所有内容；
- 6 点击‘退出’，关闭主界面a，退出整个桌面应用程序；
- 7 其他需求：引入matiralUI的css做样式；