#!/bin/bash
# Zip the extension for Chrome Web Store submission
cd "$(dirname "$0")"
rm -f meteor-detector.zip
zip -r meteor-detector.zip . \
  -x "*.DS_Store" \
  -x "*__MACOSX*" \
  -x "*.git*" \
  -x "*.claude*" \
  -x "*.zip" \
  -x "CLAUDE.md" \
  -x "README.md" \
  -x "PRIVACY_POLICY.md" \
  -x "icons/meteor-icon-red.png" \
  -x "zip.sh"
echo "Created meteor-detector.zip"
