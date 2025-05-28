/** @type {import('next').NextConfig} */

const nextConfig = {
  // Enable image optimization
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // React settings
  reactStrictMode: false,
  // For JSX runtime
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Disable concurrentFeatures to avoid JSX runtime issues
    concurrentFeatures: false,
    serverComponents: false,
    appDir: true,
  },
  webpack: (config) => {
    // Add resolve fallbacks for React
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Add React as an external dependency
    config.externals = {
      ...config.externals,
    };
    
    return config;
  },
};

export default nextConfig;
