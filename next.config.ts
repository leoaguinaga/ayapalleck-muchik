import type { NextConfig } from "next";
import { trimEndSlash, withProtocol } from "./lib/handle-url";

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