// listen for incoming message from the content-script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.greeting == 'hello') {
//     console.log('greetings from content script')
//     checkUserLogin(request, sender, sendResponse)
//   }

//   return true
// })

// function checkUserLogin(request, sender, sendResponse) {
//   console.log('checkUserLogin', request, sender, sendResponse)
//   chrome.cookies.get({ URL: 'https://*.friendsvpnpro.com/*', name: 'FriendsVPNProCookiesSent' }, function (cookie) {
//     console.log('checkUserLogin cookie in the function', cookie)
//     var userId = cookie?.value || 0

//     sendResponse({ farewell: userId ? 'Logged' : 'NotLogged' })
//   })
// }

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
  if (request.greeting === 'hello') {
    checkUserLogin(request, sender, sendResponse)
  }
})

function checkUserLogin(request, sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
  console.log('request', request, 'sender', sender, 'sendResponse', sendResponse)
  chrome.cookies.get({ URL: 'https://*.friendsvpnpro.com/*', name: 'FriendsVPNProCookiesSent' }, function (cookie) {
    console.log('checkUserLogin cookie in the function', cookie)
    var userId = cookie?.value || 0
    console.log('checkUserLogin userId', userId)
    sendResponse({ farewell: userId ? 'Logged' : 'NotLogged' })
  })
}
