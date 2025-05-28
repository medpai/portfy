/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Transpile modules that cause issues
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Additional webpack configuration
  webpack: (config) => {
    // Fix for issues with react-three-fiber
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom')
    }
    return config
  }
}

module.exports = nextConfig
