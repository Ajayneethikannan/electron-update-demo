import path from 'node:path';
import { setupHandlers } from "./setupHandlers.js";
const isDev = process.env.NODE_ENV === "development";
import { app, BrowserWindow, ipcMain } from "electron";
import debug from "electron-debug";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { NsisUpdater } from 'electron-updater';

const updater = new NsisUpdater({
  channel: 'latest',
  logger: console,
  autoDownload: true,
});
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("Starting the application");
debug();
function createWindow(fileName) {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: isDev,
      preload: path.join(import.meta.dirname, 'preload.js')
    },
  });
  mainWindow.loadFile(`${fileName}.html`);
}

app
  .whenReady()
  .then(
    () => {
      // setupHandlers();
      ipcMain.handle('ping', () =>{
        console.log("Ping called");
        return "pong";
      });
      createWindow("index");
    }
  );

app
  .on(
    "window-all-closed", 
    () => {
      app.quit();
    }
  );
