/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://cloudinary.com/console/c-15229c9ad47c14596c201f153198d7/'
  }
}

module.exports = nextConfig
