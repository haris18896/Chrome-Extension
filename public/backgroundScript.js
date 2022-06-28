// *********** Takes an array of scripts that would be run in the background page. ***********
// Provides persistence and handles background events

// listen for incoming message from the content-script
window.perfWatch = {}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  window.perfWatch[sender.tab.id] = message.essential || null
})

// try {
//   //ON page change
//   chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//       chrome.scripting.executeScript({
//         files: ['inject.js'],
//         target: { tabId: tab.id },
//       })
//     }
//   })
// } catch (e) {
//   console.log(e)
// }
