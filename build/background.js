try {
  //ON page change
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken')
      chrome.scripting.executeScript({
        files: ['inject.js'],
        target: { tabId: tab.id },
        token: token,
      })
    }
  })
} catch (e) {
  console.log('inject error', e)
}
