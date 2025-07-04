import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains:["raw.githubusercontent.com"],
    minimumCacheTTL:60
  }
};

export default nextConfig;
