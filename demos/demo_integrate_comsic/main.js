/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-03-07 13:05:18
 * @LastEditors: wenq
 * @LastEditTime: 2020-03-16 23:25:30
 */

const { app, BrowserWindow } = require('electron');
const { COSMICURL } = require('./utils/const');

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  //方法1：通过页面文件加载一个第三方链接页面
  win.loadFile('cosmic.html')
  
  //方法2：直接加载链接来加载第三方页面
  // win.loadURL(COSMICURL);
}

//electron app生命周期方法：ready
app.whenReady().then(createWindow)
