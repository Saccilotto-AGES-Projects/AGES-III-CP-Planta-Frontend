/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 300, // Increased to 5 minutes
  images: {
    domains: [
      'cpplanta.duckdns.org',
      'api.cpplanta.duckdns.org',
      'pgadmin.cpplanta.duckdns.org',
      'localhost'
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
          destination: 'http://localhost:3000/:path*'
        }
      ];
    }
    return [];
  },
};

module.exports = nextConfig;