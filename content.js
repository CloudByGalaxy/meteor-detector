// content.js - inject external script to bypass CSP

let packagesReady = null;
let debounceTimer = null;

function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(src);
    script.onload = function() { this.remove(); resolve(); };
    script.onerror = function() { this.remove(); reject(src); };
    (document.head || document.documentElement).appendChild(script);
  });
}

function ensurePackagesLoaded() {
  if (!packagesReady) {
    packagesReady = injectScript('packages.js');
  }
  return packagesReady;
}

async function detectMeteor() {
  try {
    await ensurePackagesLoaded();
    await injectScript('detector.js');
  } catch(src) {
    console.error('Meteor Detector: Failed to load ' + src);
  }
}

function scheduleDetection(delay) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(detectMeteor, delay);
}

// Listen for the response from the injected script
window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  if (!event.data || event.data.type !== 'METEOR_DETECTED') return;

  chrome.runtime.sendMessage({
    action: 'meteorStatus',
    data: event.data.payload
  }).catch(() => {});
});

// Run detection at increasing intervals to catch late-loading Meteor apps
scheduleDetection(500);
setTimeout(() => scheduleDetection(1500), 1500);
setTimeout(() => scheduleDetection(3000), 3000);

// Also try when page is fully loaded
window.addEventListener('load', () => {
  scheduleDetection(1000);
});

// Listen for SPA navigation (for single-page Meteor apps)
let lastUrl = location.href;
const navigationObserver = new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    scheduleDetection(500);
  }
});
navigationObserver.observe(document, { subtree: true, childList: true });
