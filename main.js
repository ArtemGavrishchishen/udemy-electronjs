const { app, BrowserWindow, Notification } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  if (Notification.isSupported()) {
    const notification = new Notification({
      title: 'test notification',
      body: 'My test message',
    });
    notification.show();
  }
});

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
