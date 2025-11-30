/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/legal-optics',
  assetPrefix: '/legal-optics/',
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/legal-optics',
  },
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
