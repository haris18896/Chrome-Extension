// listen for incoming message from the content-script

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.status === 'online') {
    checkUserLogin(sender, sendResponse)
  }
})

function checkUserLogin(sender, sendResponse) {
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
