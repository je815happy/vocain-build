const { app, BrowserWindow, session } = require('electron');
const path = require('path');

// localStorage가 재시작 후에도 유지되도록 userData 경로 고정
app.setPath('userData', path.join(app.getPath('appData'), 'Vocain'));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'Vocain',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // localStorage 영속성 보장
      partition: 'persist:vocain',
    },
    backgroundColor: '#ffffff',
    show: false,
  });

  mainWindow.loadFile('index.html');

  // 준비되면 표시 (흰 화면 깜빡임 방지)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 개발 중 DevTools (배포 시 제거)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
