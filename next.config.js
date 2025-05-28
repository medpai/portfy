/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  // Disable features that might cause issues
  swcMinify: false,
  reactStrictMode: false,
  // Needed for static export
  trailingSlash: true,
  // Preserve all styles and assets
  assetPrefix: '',
  // Keep all profile picture and styling customizations
  optimizeFonts: false
};

module.exports = nextConfig;
