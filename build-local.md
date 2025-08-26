# Local Build and Publish Guide

This guide walks you through building and publishing your Electron app locally to GitHub releases.

## Prerequisites

1. **GitHub Token**: Already configured in `.env` file
2. **Repository**: `https://github.com/Ajayneethikannan/electron-update-demo`
3. **Dependencies**: Run `yarn install` if not done already

## Build Commands

### 1. Development
```bash
yarn dev          # Run in development mode
yarn start        # Run in production mode
```

### 2. Build Only (without publishing)
```bash
yarn build        # Build for current platform
yarn build:win    # Build for Windows
yarn build:mac    # Build for macOS  
yarn build:linux  # Build for Linux
yarn build:all    # Build for all platforms
```

### 3. Build and Publish to GitHub
```bash
yarn publish      # Build and publish for current platform
yarn publish:win  # Build and publish for Windows
yarn publish:mac  # Build and publish for macOS
yarn publish:linux # Build and publish for Linux
```

### 4. Special Publishing Options
```bash
yarn draft        # Publish only when creating a Git tag
yarn prerelease   # Publish as pre-release
```

## Publishing Workflow

### Step 1: Update Version
```bash
# Update version in package.json
npm version patch    # 1.0.0-alpha → 1.0.1
npm version minor    # 1.0.0-alpha → 1.1.0
npm version major    # 1.0.0-alpha → 2.0.0
npm version prerelease # 1.0.0-alpha → 1.0.0-alpha.0
```

### Step 2: Build and Publish
```bash
# For your current platform (macOS)
yarn publish:mac

# The command will:
# 1. Build the .dmg installer
# 2. Generate latest-mac.yml for auto-updates
# 3. Create a GitHub release with tag v1.0.0-alpha
# 4. Upload both files as release assets
```

## What Gets Created

### Files Generated:
- **macOS**: `YourApp-1.0.0-alpha.dmg` + `latest-mac.yml`
- **Windows**: `YourApp Setup 1.0.0-alpha.exe` + `latest.yml`  
- **Linux**: `YourApp-1.0.0-alpha.AppImage` + `latest-linux.yml`

### GitHub Release:
- **Tag**: `v1.0.0-alpha`
- **Title**: Release v1.0.0-alpha
- **Assets**: Installer files + update metadata files

## Auto-Update Process

1. **Your app** (when running) checks GitHub releases
2. **Downloads** `latest-mac.yml` (or platform equivalent)
3. **Compares** versions with current app version
4. **Downloads** and installs update if newer version exists
5. **Prompts** user to restart to complete update

## Troubleshooting

### Token Issues
- Make sure `.env` file exists with valid `GH_TOKEN`
- Token needs 'repo' scope permissions

### Build Issues  
- Check `electron-builder.config.js` for configuration
- Ensure all dependencies are installed: `yarn install`

### Publishing Issues
- Verify repository URL in `package.json` matches GitHub repo
- Check GitHub token permissions
- Ensure you have write access to the repository