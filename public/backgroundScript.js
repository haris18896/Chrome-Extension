// listen for incoming message from the content-script



var config = {
  mode: 'pac_script',
  pacScript: {
    data:
      'function FindProxyForURL(url, host) {\n' +
      "  if (host == 'www.google.com')\n" +
      "    return 'PROXY 119.152.152.163:80';\n" +
      "  return 'DIRECT';\n" +
      '}',
  },
}
chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
  console.log('Proxy settings applied.')
})

chrome.proxy.settings.set({ value: { mode: 'direct' }, scope: 'regular' }, function () {
  console.log('Proxy settings Reset.')
})

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
