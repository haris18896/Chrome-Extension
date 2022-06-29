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
  if (request.greeting === 'hello') {
    checkUserLogin(sender, sendResponse)
  }
})

function checkUserLogin(sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
  var resp = sendResponse()
  chrome.cookies.get({ URL: 'https://*.friendsvpnpro.com/*', name: 'FriendsVPNProCookiesSent' }, function (cookie) {
    console.log('checkUserLogin cookie in the function', cookie)
    var userId = cookie?.value || 0
    console.log('checkUserLogin userId', userId)
    resp({ farewell: userId ? 'Logged' : 'NotLogged' })
  })
}
