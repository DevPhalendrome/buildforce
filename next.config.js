/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/buildforce',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig