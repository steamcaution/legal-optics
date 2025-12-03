/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(tsx?|jsx?)$/,
      use: {
        loader: 'string-replace-loader',
        options: {
          search: '(/img/|/fonts/|/icons/|/icon/)',
          replace: match => {
            const prefix = process.env.NEXT_PUBLIC_APP_ENV === 'github' ? '/legal-optics' : '';
            return prefix + match;
          },
          flags: 'g'
        }
      }
    });
    return config;
  },
  compiler: {
    emotion: true
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
