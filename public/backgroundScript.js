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

// Simple One-Time requests background script

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(sender?.tab ? 'from a content script: ' + sender?.tab?.url : 'from the extension')

//   if (request.greetings) {
//     console.log('response of content script: ', request.greetings)
//     sendResponse({ farewell: 'Bye there' })
//   }
// })

// Long-lived connections

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === 'knock')

  port.onMessage.addListener(function (msg) {
    if (msg.joke === 'KnockKnock') {
      port.postMessage({ question: "who's there?" })
    } else if (msg.answer === 'Haris') {
      port.postMessage({ question: 'Haris who?' })
    } else if (msg.answer === 'Haris Ahmad Khan') {
      post.postMessage({ question: "I don't know who you are" })
    }
  })
})
