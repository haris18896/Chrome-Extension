// Simple One-Time requests script
chrome.runtime.sendMessage({ greetings: 'Hello' }, function (response) {
  console.log('content script message: ', response.farewell)
})
