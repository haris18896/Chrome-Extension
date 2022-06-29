// listen for incoming message from the content-script

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
  if (sender) {
    checkUserLogin(request, sender, sendResponse)
  }
})

function checkUserLogin(request, sender, sendResponse) {
  console.log('request', request)
  if (sender.tab?.url) {
    let cookieName = sender?.tab?.url

    chrome.scripting.executeScript({
      target: { tabId: sender?.tab?.id },
      func: cookieInjection,
      args: [cookieName],
    })

    console.log('cookieName', cookieName)
  }
}

function cookieInjection(name) {
  console.log(`here is the ${name}`)
  alert(`here is the ${name}`)
}
