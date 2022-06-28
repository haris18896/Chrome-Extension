// Simple One-Time requests script

// chrome.runtime.sendMessage({ greetings: 'Hello' }, function (response) {
//   console.log('content script message: ', response.farewell)
// })

// Long-lived connections

// var port = chrome.runtime.connect({ name: 'knockknock' })
// port.postMessage({ joke: 'Knock_knock' })
// port.onMessage.addListener(function (msg) {
//   console.log('sending message from content script')
//   if (msg.question === "Who's there?") {
//     console.log('content script message: ', msg.question)
//     port.postMessage({ answer: 'Madame' })
//   } else if (msg.question === 'Madame who?') {
//     console.log('content script message: ', msg.question)
//     port.postMessage({ answer: 'Madame... Bovary' })
//   }
// })
