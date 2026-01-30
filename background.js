// Store Meteor info per tab
const tabMeteorInfo = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'meteorStatus' && sender.tab) {
    const tabId = sender.tab.id;
    tabMeteorInfo[tabId] = message.data;
    
    if (message.data.isMeteor) {
      const parts = (message.data.version || '').replace('METEOR@', '').split('.');
      const version = parts.length >= 2 ? parts[0] + '.' + parts[1] : parts[0] || '✓';
      
      chrome.action.setBadgeText({ tabId, text: version });
      chrome.action.setBadgeBackgroundColor({ tabId, color: '#DE4F4F' }); // Meteor red
    } else {
      chrome.action.setBadgeText({ tabId, text: '' });
    }
  }
  
  if (message.action === 'getMeteorInfo' && message.tabId) {
    sendResponse(tabMeteorInfo[message.tabId] || { isMeteor: false });
  }
  
  return true;
});

// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabMeteorInfo[tabId];
});

// Clear badge when navigating to new page
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'loading') {
    chrome.action.setBadgeText({ tabId, text: '' });
    delete tabMeteorInfo[tabId];
  }
});