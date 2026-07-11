const { contextBridge, ipcRenderer } = require('electron')

// Expose versions of node, chrome, and electron to renderer
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
})