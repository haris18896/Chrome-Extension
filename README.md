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
