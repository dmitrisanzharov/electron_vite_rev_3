import { contextBridge, ipcRenderer } from 'electron';

console.log('preload ran');

ipcRenderer.invoke('api-from-main').then((result) => console.log('result in preload: ', result));



contextBridge.exposeInMainWorld('preloadApiThatIsInWindow', {
    preloadApiKeyOne: (arg: any) => {
        console.log('arg', arg);
        return ipcRenderer.invoke('api-from-main', arg)
    },
    anyValue: 'omg',
    getMemoryFromPreload: ()=> ipcRenderer.invoke('getMemoryFromMain')
})