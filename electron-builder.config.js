/**
 * Electron Builder Configuration
 * @see https://www.electron.build/configuration/configuration
 */

module.exports = {
  appId: "com.electron.app",
  productName: "Electron App",
  copyright: "Copyright © 2025",
  
  // Directories
  directories: {
    output: "dist",
    buildResources: "build"
  },
  
  // Files to include/exclude
  files: [
    "**/*",
    "!node_modules/",
    "!src/",
    "!.env",
    "!.env.*",
    "!.github/",
    "!*.md",
    "!*.log"
  ],
  
  // Auto-updater settings
  generateUpdatesFilesForAllChannels: true,
  
  // Publishing configuration
  publish: {
    provider: "github",
    owner: "Ajayneethikannan",
    repo: "electron-update-demo"
  },
  
  // Platform-specific configurations
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64", "ia32"]
      }
    ],
    icon: "build/icon.ico" // Optional: add your icon
  },
  
  mac: {
    target: [
      {
        target: "dmg",
        arch: ["x64", "arm64"]
      }
    ],
    icon: "build/icon.icns", // Optional: add your icon
    category: "public.app-category.productivity"
  },
  
  linux: {
    target: [
      {
        target: "AppImage",
        arch: ["x64"]
      }
    ],
    icon: "build/icon.png" // Optional: add your icon
  },
  
  // NSIS installer configuration (Windows)
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true
  },
  
  // DMG configuration (macOS)
  dmg: {
    title: "${productName} ${version}",
    icon: false
  }
};