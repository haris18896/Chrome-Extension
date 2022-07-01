// listen for incoming message from the content-script

self.addEventListener('connected', function (event) {
  console.log('event in background script', event)
  self.clients.matchAll().then(all =>
    all.forEach(client => {
      client.postMessage('responding to : ', event.client)
      console.log('console.log responding to : ', event.client)
    })
  )
})

// var config = {
//   mode: 'pac_script',
//   pacScript: {
//     data:
//       'function FindProxyForURL(url, host) {\n' +
//       "  if (host == 'www.google.com')\n" +
//       "    return 'PROXY 119.152.152.163:80';\n" +
//       "  return 'DIRECT';\n" +
//       '}',
//   },
// }
// chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
//   console.log('Proxy settings applied.')
// })

// chrome.proxy.settings.set({ value: { mode: 'direct' }, scope: 'regular' }, function () {
//   console.log('Proxy settings Reset.')
// })
