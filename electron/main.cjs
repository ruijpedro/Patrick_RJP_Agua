const { app, BrowserWindow, shell } = require('electron');
const path = require('node:path');
app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1250, height: 850, minWidth: 850, minHeight: 600, webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  win.webContents.setWindowOpenHandler(({url}) => { if (url.startsWith('https://')) shell.openExternal(url); return { action: 'deny' }; });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
