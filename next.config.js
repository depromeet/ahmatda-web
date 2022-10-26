const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: false,
  },
  pageExtensions: ['page.tsx', 'api.ts'],
  swcMinify: true,
  compiler: {
    reactRemoveProperties: isProd && {
      properties: ['^data-test'],
    },
    removeConsole: isProd && {
      exclude: ['error'],
    },
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
