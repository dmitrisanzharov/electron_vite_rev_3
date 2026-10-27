import path from 'node:path';
import { app, BrowserWindow } from 'electron';

console.log('============================');

console.log('BrowserWindow', BrowserWindow);

function createMainWindowFn() {
    console.log('main window function');

    const mainWindow = new BrowserWindow({
      width: 1400,
      height: 800,
      webPreferences: {
        preload: path.join(__dirname, 'preload.cjs')
      }
    });


}

let test = app.getPath('downloads');
console.log('test: ', test);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(() => {
    createMainWindowFn();

    app.on('activate', () => {
        const noActiveWindowsOpen = BrowserWindow.getAllWindows().length === 0;

        if (noActiveWindowsOpen) {
            createMainWindowFn();
        }
    });
});
