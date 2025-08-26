#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if GH_TOKEN is set
if [ -z "$GH_TOKEN" ]; then
    echo "❌ Error: GH_TOKEN not found in .env file"
    exit 1
fi

echo "🔑 GitHub token loaded"
echo "📦 Building and publishing to GitHub..."

# Run the publish command
yarn publish:mac

echo "✅ Publish complete!"
echo "🌐 Check your release at: https://github.com/Ajayneethikannan/electron-update-demo/releases"