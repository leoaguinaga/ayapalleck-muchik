// next.config.ts
import type { NextConfig } from "next";

function withProtocol(url?: string) {
  if (!url) return "https://muchik-api-production.up.railway.app";
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
        // todo lo de /api menos /api/auth
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
