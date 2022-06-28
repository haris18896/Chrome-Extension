// Simple One-Time requests script

// chrome.runtime.sendMessage({ greetings: 'Hello' }, function (response) {
//   console.log('content script message: ', response.farewell)
// })

// Long-lived connections

var port = chrome.runtime.connect({ name: 'knock' })

port.postMessage({ joke: 'Knock Knock you idiot' })
port.onMessage.addListener(function (msg) {
  if (msg.question === "who's there?") {
    port.onMessage({ answer: 'Haris' })
  } else if (msg.question === 'Haris who?') {
    port.onMessage({ answer: 'Haris Ahmad Khan' })
  }
})
