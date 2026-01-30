# Meteor Detector

<p align="center">
  <img src="icons/icon128.png" alt="Meteor Detector" width="128" height="128">
</p>

A Chrome extension that detects whether a website is built with [MeteorJS](https://www.meteor.com/) and displays the version and detected Atmosphere packages.

## Features

- Detects MeteorJS on any website you visit
- Shows the Meteor version on the extension badge
- Lists detected Atmosphere packages in the popup
- Supports single-page app (SPA) navigation
- Recognizes 90+ popular Atmosphere packages

## Install

### From Chrome Web Store

*Coming soon*

### From source

1. Clone this repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder

## How it works

The extension injects a detection script into the page context to check for the `Meteor` and `Package` globals. Results are passed back through Chrome's messaging system and displayed on the badge and popup.

```
detector.js (page context)
    → postMessage
content.js (content script)
    → chrome.runtime.sendMessage
background.js (service worker)
    → badge + cache
popup.js ← reads from background.js
```

Detection runs at multiple intervals (500ms, 1.5s, 3s) to handle late-loading Meteor apps, and a MutationObserver re-triggers detection on client-side navigation.

## Permissions

| Permission | Reason |
|---|---|
| `activeTab` | Access the current tab for badge display |
| `scripting` | Inject the detection script into the page context to read `Meteor` and `Package` globals |

## Privacy

This extension does not collect personal data or transmit anything externally. All detection happens locally in your browser. See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Contributing

Contributions are welcome. The codebase is vanilla JavaScript with no build step or dependencies — just edit and reload the extension in `chrome://extensions/`.

To add a new package to the detection list, edit [`packages.js`](packages.js).

## License

MIT
