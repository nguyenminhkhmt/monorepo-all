const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'ui',
    'app',
    'react-native',
    'react-native-web',
    'nativewind',
    'react-native-css-interop'
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native/Libraries/Image/AssetRegistry':
        'react-native-web/dist/cjs/modules/AssetRegistry' // Fix for loading images in web builds with Expo-Image
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions
    ];
    return config;
  }
};

module.exports = withExpo(nextConfig);
