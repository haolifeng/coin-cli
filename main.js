// electron.js
const { app, BrowserWindow ,ipcMain} = require('electron');
const path = require('path');
const url = require('url')

let win;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Required for using Node.js APIs in the renderer process
      webSecurity:false,
      preload: path.join(__dirname,"./public/render.js")
    },
  });

  // Load the React app
  /*
  win.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000' // Development server
      : `file://${path.join(__dirname, '../build/index.html')}` // Production build
  );
*/

    const msgHandle = require('./src/server/msghandle');
    msgHandle.init(win);

    let pathdd = url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true
    })
    win.loadURL(pathdd)

      // 主进程监听渲染进程发送的 'ping' 事件
  ipcMain.on('ping', (event, arg) => {
    console.log('i reciev ping --- : ', arg); // 打印从渲染进程发送的消息
    event.reply('pong', 'Hi there!'); // 发送回复到渲染进程
  });

  // Open DevTools in development mode
  //if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  //}
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});