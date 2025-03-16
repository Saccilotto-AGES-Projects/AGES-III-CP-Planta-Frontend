/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.cpplanta.duckdns.org',
  },
  images: {
    domains: [
      'cpplanta.duckdns.org',
      'api.cpplanta.duckdns.org',
      'pgadmin.cpplanta.duckdns.org',
      'localhost'
    ]
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
  webpack: (config, { isServer, dev }) => {
    // Example 1: Add path aliases for easier imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'components'),
      '@styles': path.join(__dirname, 'styles'),
      '@utils': path.join(__dirname, 'utils'),
      '@hooks': path.join(__dirname, 'hooks'),
    };

    // Example 2: Handle specific file types
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Example 3: Add environment-specific settings
    if (dev && !isServer) {
      // Development-only client-side settings
      config.devtool = 'eval-source-map';
    }

    // Example 4: Handle environment variables
    const definePluginIndex = config.plugins.findIndex(
      (plugin) => plugin.constructor.name === 'DefinePlugin'
    );
    
    if (definePluginIndex !== -1) {
      // Add custom environment variables
      const existingDefinitions = config.plugins[definePluginIndex].definitions;
      config.plugins[definePluginIndex].definitions = {
        ...existingDefinitions,
        'process.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
        'process.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
      };
    }

    return config;
  },
};

module.exports = nextConfig;