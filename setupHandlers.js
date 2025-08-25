import { ipcMain } from "electron"

export const setupHandlers = () => {
    ipcMain.handle('ping', () => 'pong');
}