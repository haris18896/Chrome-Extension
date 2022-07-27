const ip = '217.23.6.40'
const port = 1080

// var config = {
//   mode: 'fixed_servers',
//   rules: {
//     singleProxy: {
//       scheme: 'socks5',
//       host: ip,
//       port: port,
//     },
//   },
// }

var config = {
  mode: 'pac_script',
  pacScript: {
    data: 'function FindProxyForURL(url, host) { return "SOCKS5 ' + ip + ':' + port + '"; }',
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
