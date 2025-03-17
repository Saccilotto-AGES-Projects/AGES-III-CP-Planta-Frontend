/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 300, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpplanta.duckdns.org',
      },
      {
        protocol: 'https',
        hostname: 'api.cpplanta.duckdns.org',
      },
      {
        protocol: 'https',
        hostname: 'pgadmin.cpplanta.duckdns.org',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
    dangerouslyAllowSVG: true, // Allow SVG as images
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  webpack(config) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/:path*`
        }
      ];
    }
    return [];
  },
};

module.exports = nextConfig;