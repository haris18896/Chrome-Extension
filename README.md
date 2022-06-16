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
cd ./out && grep -rli '_next' * | xargs -I@ sed -i '' 's/_next/next/g' @

zip -r -FS ../my-extension.zip *
```

to make a build and export with optimized Images  `next/image`, add these configs to `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://cloudinary.com/console/c-15229c9ad47c14596c201f153198d7/'
  }
}

module.exports = nextConfig
```
`npm install --save-dev npm-watch`

```json
{
  "name": "friends-vpn-extension",
  "version": "0.1.0",
  "private": true,
  // npm-watch
  "scripts": {
    "dev": "npm-watch",
    "lint:build": "mv out/_next out/assets && sed -i 's/\\\\/_next/\\\\/assets/g' out/**.html",
    "build": "next build && next export && npm run lint:build",
    "start": "next start"

  },
// for vercel deployment only
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export" : "next export",
    "lint" : "next lint",
    "start": "next start"
  },
    "dependencies": {
    "@reduxjs/toolkit": "^1.8.2",
    "autoprefixer": "^10.4.7",
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "classnames": "^2.3.1",
    "formik": "^2.2.9",
    "jwt-decode": "^3.1.2",
    "next": "12.1.6",
    "next-redux-wrapper": "^7.0.5",
    "node-sass": "^7.0.1",
    "nprogress": "^0.2.0",
    "react": "^18.1.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.1.0",
    "react-feather": "^2.0.10",
    "react-icons": "^4.4.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "reactstrap": "^9.1.1",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
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
