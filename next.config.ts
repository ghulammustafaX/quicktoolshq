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
  // Redirects for content consolidation only
  async redirects() {
    return [
      // PDF Compress redirect to prevent duplicate content
      {
        source: '/tools/pdf-compress',
        destination: '/tools/pdf-compressor',
        permanent: true,
      },
    ];
  },
  // Headers for SEO optimization
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
