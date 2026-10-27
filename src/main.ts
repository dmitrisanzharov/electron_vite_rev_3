import path from 'node:path';
import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import started from 'electron-squirrel-startup';

if(started){
    app.quit();
}


// the API

ipcMain.handle('api-from-main', ()=> {
    return 'api from main returning a string';
})












console.log('============================');

console.log('BrowserWindow', BrowserWindow);
// Menu.setApplicationMenu(null);

const rootPath = app.getAppPath();

function createMainWindowFn() {
    console.log('main window function');

    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs')
        }
    });

    // const pathToProdHtml = path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`);
    // console.log('pathToProdHtml: ', pathToProdHtml);

    // mainWindow.loadFile(pathToProdHtml);

    const pathToDevServer = MAIN_WINDOW_VITE_DEV_SERVER_URL;
  

    if(pathToDevServer){
          mainWindow.loadURL(pathToDevServer);
    } else {
        mainWindow.loadFile( path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
    }


    // dev tools by default
    mainWindow.webContents.openDevTools();
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.whenReady().then(()=> {
    createMainWindowFn();

    app.on('activate', ()=> {
        const noWindowIsOpenCheck = BrowserWindow.getAllWindows().length === 0;

        if(noWindowIsOpenCheck){
            createMainWindowFn();
        }
    })
})
