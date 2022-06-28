// listen for incoming message from the content-script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // if the incoming message is "Hello"
  alert('message : ', request)
  console.log('message in console.', request)
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
