const ip = '217.23.6.40'
const port = 1080

// var config = {
//   mode: 'fixed_servers',
//   rules: {
//     singleProxy: {
//       scheme: 'socks5',
//       host: ip,
//       port: parseInt(port),
//     },
//   },
// }

var config = {
  mode: 'pac_script',
  pacScript: {
    data: function FindProxyForURL(url, host) {
      // If the hostname matches, send direct.
      if (dnsDomainIs(host, 'intranet.domain.com') || shExpMatch(host, '(*.abcdomain.com|abcdomain.com)'))
        return 'PROXY 47.242.52.247:3128; PROXY 117.54.114.101:80; DIRECT'

      // If the protocol or URL matches, send direct.
      if (url.substring(0, 4) == 'ftp:' || shExpMatch(url, 'http://abcdomain.com/folder/*'))
        return 'PROXY 223.160.16.50:3128; PROXY 183.215.172.2:9091; DIRECT'

      // If the requested website is hosted within the internal network, send direct.
      if (
        isPlainHostName(host) ||
        shExpMatch(host, '*.local') ||
        isInNet(dnsResolve(host), '10.0.0.0', '255.0.0.0') ||
        isInNet(dnsResolve(host), '172.16.0.0', '255.240.0.0') ||
        isInNet(dnsResolve(host), '192.168.0.0', '255.255.0.0') ||
        isInNet(dnsResolve(host), '127.0.0.0', '255.255.255.0')
      )
        return 'PROXY 51.75.6.2:32648; PROXY 47.94.161.219:22; DIRECT'

      // If the IP address of the local machine is within a defined
      // subnet, send to a specific proxy.
      if (isInNet(myIpAddress(), '39.37.167.13', '255.255.255.0')) return 'PROXY 186.248.89.6:5005; PROXY 125.99.58.110:3128'

      // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
      return 'PROXY 125.21.3.41:8080; PROXY 176.192.70.58:8009'
    },
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
