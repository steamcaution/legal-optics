/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  output: 'export',
  compiler: {
    emotion: true
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
