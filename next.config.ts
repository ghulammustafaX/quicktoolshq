import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Configure image optimization
    formats: ['image/webp', 'image/avif'],
    domains: ['randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
      },
    ],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  poweredByHeader: false,
};

export default nextConfig;
