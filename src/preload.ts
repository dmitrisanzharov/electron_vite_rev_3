import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('preloadApiThatIsInWindow', {
    preloadApiKeyOne: () => ipcRenderer.invoke('api-from-main')
})