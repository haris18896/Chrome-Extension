This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
```
rm -rf .next/ out/
rm extension.zip

yarn next build
yarn next export

cp manifest.json ./out

mv ./out/_next ./out/next
(or)
mv ./build/_next ./build/next
cd out (or) cd build 
grep -rl '/_next' * | xargs sed -i 's|/_next|/next|g'

zip -r -FS ../my-extension.zip *
```

`npm install --save-dev npm-watch`

```json
// Package.json
{
  "name": "friends-vpn-extension",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "dev-watch": "npm-watch",
    "build": "next build",
    "export": " next export -o build",
    "lint": "next lint",
    "start": "next start",
    "move": "mv ./build/_next ./build/next",
    "change": "cd build",
    "replace": "grep -rl \"_next\" ./build | xargs sed -i \"s/_next/next/g\"",
    "back": "cd ../",
    "remove": "rm -rf .next/ build/ out/ extension.zip",
    "git": "git add * && git commit -m",
    "shoot": "npm run build && npm run export && npm run move && npm run change && npm run replace && npm run back ",
    "postgit": "git push --all"
  },
  "dependencies": {
    "@fingerprintjs/fingerprintjs": "^3.3.3",
    "@reduxjs/toolkit": "^1.8.2",
    "autoprefixer": "^10.4.7",
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "classnames": "^2.3.1",
    "cookie": "^0.5.0",
    "cookie-cutter": "^0.2.0",
    "cookies": "^0.8.0",
    "formik": "^2.2.9",
    "jwt-decode": "^3.1.2",
    "lodash.debounce": "^4.0.8",
    "next": "12.1.6",
    "next-redux-wrapper": "^7.0.5",
    "nextjs-cors": "^2.1.1",
    "node-sass": "^7.0.1",
    "nprogress": "^0.2.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.4.0",
    "react-cookie": "^4.1.1",
    "react-country-flag": "^3.0.2",
    "react-dom": "^18.2.0",
    "react-feather": "^2.0.10",
    "react-icons": "^4.4.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "reactstrap": "^9.1.1",
    "redux-batched-subscribe": "^0.1.6",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "eslint": "8.17.0",
    "eslint-config-next": "12.1.6",
    "npm-watch": "^0.11.0"
  },
  "watch": {
    "build": {
      "patterns": [
        "styles/**",
        "pages/**",
        "public/**",
        "helpers/**",
        "components/**",
        "Screens/**",
        "utility/**",
        "next.config.js"
      ],
      "ignore": [
        "out",
        "node_modules",
        ".next",
        ".vscode"
      ],
      "extensions": [
        "js",
        "json"
      ]
    }
  }
}


```

### Manifest.json
```json
// manifest.json
{
  "manifest_version": 3,
  "name": "FriendsVPN",
  "short_name": "FriendsVPN",
  "version": "1.0.1",
  "author": "Fit-OutFit Software Tech. Pvt. Ltd.",
  "description": "FriendsVPN is a free VPN service offered by us. FriendsVPN offers you secure and private internet access. We prioritize your online privacy, security, and freedom above all else. You can use FriendsVPN if you want absolute online privacy and security. FriendsVPN also bypass geo-blocks and other content restrictions ",
  "icons": {
    "16": "/assets/icons/icon-16.png",
    "32": "/assets/icons/icon-32.png",
    "48": "/assets/icons/icon-48.png",
    "128": "/assets/icons/icon-128.png"
  },
  "action" :{
    "default_popup" : "index.html",
    "default_title" : "FriendsVPN",
    "default_icon": {
      "16": "/assets/icons/icon-16.png",
      "32": "/assets/icons/icon-32.png",
      "48": "/assets/icons/icon-48.png",
      "128": "/assets/icons/icon-128.png"
    }
  },
  "permissions": ["scripting", "cookies", "tabs", "storage", "contentSettings", "proxy"],
  "host_permissions": ["https://*.friendsvpnpro.com/*"],
  "background": {
    "service_worker": "backgroundScript.js"
  },
  "externally_connectable": {
    "matches": ["https://*.friendsvpnpro.com/*"]
  }
 
}
```

---
---

# Proxy
[Proxy Auto-Configuration Script](https://www.oreilly.com/library/view/web-caching/156592536X/ch04s03.html)

[Proxy Auto-Configuration (PAC) file](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)

DIRECT => connection should me made directly, without any proxies

PROXY host:port => The specified proxy should be used

SOCKS host:port => The specified SOCKS proxy should be used

Recent versions of Firefox support as well => HTTP host:port, HTTPS host:port, SOCKS4 host:port, SOCKS5 host:port