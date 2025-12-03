/** @type {import('next').NextConfig} */
console.log('Current APP_ENV:', process.env.NEXT_PUBLIC_APP_ENV);
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  compiler: {
    emotion: true
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
