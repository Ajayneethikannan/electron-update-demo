import path from 'node:path';
import { setupHandlers } from "./setupHandlers.js";
const isDev = process.env.NODE_ENV === "development";
import { app, BrowserWindow, ipcMain } from "electron";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import updaterPackage from 'electron-updater';
const autoUpdater = updaterPackage.autoUpdater;
import log from 'electron-log';


// Configure logging
log.initialize();

// Configure the auto-updater
autoUpdater.forceDevUpdateConfig = true;
autoUpdater.checkForUpdates();
autoUpdater.logger = console;
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;
autoUpdater.logger = log;

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("Starting the application");

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
      
      // Check for updates after app is ready (only in production)
      if (!isDev) {
        autoUpdater.checkForUpdatesAndNotify();
      }
    }
  );

app
  .on(
    "window-all-closed", 
    () => {
      app.quit();
    }
  );
