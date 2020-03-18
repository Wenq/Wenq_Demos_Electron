/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-03-07 13:05:18
 * @LastEditors: wenq
 * @LastEditTime: 2020-03-18 22:04:45
 */

// const electron = require('electron')
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win, addWnd;
function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 通过文件('index.html文件')加载页面
  win.loadFile('./form/index.html');

  // 通过链接加载页面
  // win.loadURL('https://github.com')

  // //打开devtools调试窗口
  // win.webContents.openDevTools();

  setMenu();
  listenMessage();
}

//打开新增界面
function showAddForm() {
  addWnd = new BrowserWindow({
    width: 500,
    height: 600,
    parent: win,
    modal: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  addWnd.loadFile('./form/addForm.html');
};

//打开调试窗口
function showDevTools(form) {
  if (form) {
    form.webContents.openDevTools();
  }
};

//设置工具栏
function setMenu() {
  Menu.setApplicationMenu(null); //清空默认工具栏
  let menus = [
    {
      label: 'File',
      submenu: [
        {
          label: 'add item',
          click: () => {
            //打开新增界面
            console.log('menu-item: add item');
            showAddForm();
          }
        },
        {
          label: 'delete item',
          click: () => {
            //删除列表中已选条目
            alert('delete item');
          }
        },
        {
          label: 'clear item',
          click: () => {
            //清空所有item
            win.webContents.send('todolist:clear');//发送消息给主界面
          }
        },
        { type: 'separator' },
        {
          label: 'quit',
          click: () => {
            //退出整个程序
            console.log('quit');
          }
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'open devTools',
          click: () => {
            showDevTools(win);
            //打开devtools调试窗口
            // win.webContents.openDevTools();
          }
        },
        { type: 'separator' },
        {
          label: 'about',
          click: () => {
            //打开about界面
          }
        }
      ]
    }
  ];
  menus = Menu.buildFromTemplate(menus);
  Menu.setApplicationMenu(menus);
};

//监听消息
function listenMessage() {
  const electron = require('electron');
  const { ipcMain } = electron;
  ipcMain.on('todolist:add', (event, args) => {
    addWnd.close(); //关闭addForm
    console.log(`main-ipcMain.on: ${JSON.stringify(args)}`);
    win.webContents.send('todolist:add', args);//发送消息给主界面
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
//electron app生命周期方法：ready
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', (e, args) => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {  //darwin==>mac
    app.quit();
  }
});

app.on('active', (e, args) => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length < 1) {
    createWindow();
  }
});


//注： code(上面的js代码), 也可以拆分成几个文件，然后用 require 导入。