const {contextBridge, ipcRenderer} = require('electron');


contextBridge.exposeInMainWorld('versions', {
    node: () => {
        return process.versions.node;
    },
    chrome: () => {
        return process.versions.chrome;
    },
    electron: () => {
        return process.versions.electron;
    },
    ping: () => {
        console.log("ping invoked");
        return ipcRenderer.invoke('ping');
    }
})