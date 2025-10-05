import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${process.env.API_URL}/api/auth/:path*`
      },
      {
        source: "/api/((?!auth).+)",
        destination: `${process.env.API_URL}/$1`
      }
    ];
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
