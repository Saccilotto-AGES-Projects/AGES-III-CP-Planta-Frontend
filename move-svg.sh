#!/bin/bash

# Create directory structure if it doesn't exist
mkdir -p public

# Copy SVG files from src/components/icons to public folder
echo "Moving SVG files to public directory..."
find src/components/icons -name "*.svg" -exec cp {} public/ \;

echo "All SVG files moved successfully!"