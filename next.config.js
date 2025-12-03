/** @type {import('next').NextConfig} */

const isGithub = process.env.NEXT_PUBLIC_APP_ENV === 'github';

const nextConfig = {
  output: 'export',
  basePath: isGithub ? '/legal-optics' : '',
  assetPrefix: isGithub ? '/legal-optics' : '',
  trailingSlash: true,
  compiler: {
    emotion: true
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
