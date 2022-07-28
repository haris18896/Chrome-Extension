const ip = '217.23.6.40'
const port = 1080

var config = {
  mode: 'pac_script',
  pacScript: {
    data:
      'function FindProxyForURL(url, host) {\n' +
      'if (dnsDomainIs(host, "google.com") || shExpMatch(host, "(*.google.com|google.com)")) \n' +
      'return "PROXY 47.242.52.247:3128; PROXY 117.54.114.101:80; DIRECT";\n' +
      'if (url.substring(0, 4) == "ftp:" || shExpMatch(url, "http://*.friendsvpnpro.com/"))\n' +
      'return "PROXY 223.160.16.50:3128; PROXY 183.215.172.2:9091; DIRECT";\n' +
      'if (\n' +
      'isPlainHostName(host) ||\n' +
      'shExpMatch(host, "*.local") ||\n' +
      'isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||\n' +
      'isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||\n' +
      'isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||\n' +
      'isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")\n' +
      ')\n' +
      'return "PROXY 51.75.6.2:32648; PROXY 47.94.161.219:22; DIRECT";\n' +
      'if (isInNet(myIpAddress(), "39.37.167.13", "255.255.255.0")) return "PROXY 186.248.89.6:5005; PROXY 125.99.58.110:3128"\n' +
      'return "PROXY 125.21.3.41:8080; PROXY 176.192.70.58:8009"\n' +
      '}',
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
