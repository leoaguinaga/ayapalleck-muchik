import type { NextConfig } from "next";

function withProtocol(url?: string) {
  if (!url) return "https://api-production-2748.up.railway.app";
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

function trimEndSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

const apiBase = trimEndSlash(withProtocol(process.env.API_URL));

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${apiBase}/api/auth/:path*`,
      },
      {

        source: "/api/((?!auth).+)",
        destination: `${apiBase}/$1`,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;