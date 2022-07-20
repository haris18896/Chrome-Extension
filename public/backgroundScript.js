// listen for incoming message from the content-script

// const ip = '222.139.221.185'
// const port = '9091'

// ********************************************************************************************************************************************

// var config = {
//   mode: 'fixed_servers',
//   rules: {
//     proxyForHttp: {
//       scheme: 'socks5',
//       host: '46.4.96.137',
//       port: '1080',
//     },
//     bypassList: ['foobar.com'],
//   },
// }

var config = {
  mode: 'pac_script',
  pacScript: {
    data: 'function FindProxyForURL(url, host) { return PROXY 145.239.85.58:9300 }',
  },
}

self.addEventListener('message', function (event) {
  self.clients.matchAll().then(all =>
    all.forEach(client => {
      client.postMessage('Responding to ' + event.data)

      if (event?.data === 'setProxy') {
        chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
          console.log('Proxy settings applied.')
        })
      } else if (event?.data === 'unsetProxy') {
        chrome.proxy.settings.set({ value: { mode: 'direct' }, scope: 'regular' }, function () {
          console.log('Proxy settings Reset.')
        })
      }
    })
  )
})

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  if (sender.url !== 'https://*.freindsvpnpro.com/*') return // don't allow other web page access
  if (request.openUrlInEditor) {
    console.log('openUrlInEditor', request.openUrlInEditor)
    openUrl(request.openUrlInEditor)
  }
})
