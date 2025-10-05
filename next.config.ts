import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.API_URL || 'https://muchik-api-production.up.railway.app';

    return [
      {
        source: "/api/auth/:path*",
        destination: `${apiUrl}/api/auth/:path*`
      },
      {
        source: "/api/((?!auth).+)",
        destination: `${apiUrl}/$1`
      }
    ];
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
