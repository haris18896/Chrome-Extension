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
  console.log('request', request, 'sender', sender, 'sendResponse', sendResponse)
  if (sender?.tab === 'https://*.friendsvpnpro.com/*') {
    let cookieName = 'Haris'

    chrome.scripting.executeScript({
      target: { tabId: sender?.tab?.id },
      func: cookieInjection,
      args: [cookieName],
    })

    chrome.cookies.get({ URL: 'https://*.friendsvpnpro.com/*', name: 'FriendsVPNProCookiesSent' }, function (cookie) {
      console.log('checkUserLogin cookie in the function', cookie)
      var userId = cookie?.value || 0

      sendResponse({ farewell: userId ? 'Logged' : 'NotLogged' })
    })
  }
}

function cookieInjection(name) {
  alert(`here is the ${name}`)
  console.log(`here is the ${name}`)
}
