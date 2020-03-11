/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-03-07 13:05:18
 * @LastEditors: wenq
 * @LastEditTime: 2020-03-08 22:14:16
 */

// const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  // win.loadFile('index.html')

  win.loadFile('cosmic.html')
}

//electron app生命周期方法：ready
app.whenReady().then(createWindow)
