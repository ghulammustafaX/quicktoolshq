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
  // Redirects to normalize URLs and prevent redirect chains
  async redirects() {
    return [
      // PDF Compress redirect to prevent duplicate content
      {
        source: '/tools/pdf-compress',
        destination: '/tools/pdf-compressor',
        permanent: true,
      },
      // Remove trailing slashes to normalize URLs
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  // Headers for canonical URL enforcement
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Link',
            value: '<https://quicktoolshq.com>; rel="canonical"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
