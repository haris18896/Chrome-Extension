try {
  chrome.tabs.onUpdate.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript({
        file: ['inject.js'],
        target: { tabId: tab.id },
      })
    }
  })
} catch (e) {
  console.log('background page error: ', e)
}
