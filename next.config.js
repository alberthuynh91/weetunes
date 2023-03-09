/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
