// listen for incoming message from the content-script

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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender?.tab ? 'from a content script: ' + sender?.tab?.url : 'from the extension')

  if (request.greetings) {
    console.log('response of content script: ', request.greetings)
    sendResponse({ farewell: 'Bye there' })
  }
})
