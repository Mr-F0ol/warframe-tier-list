import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.warframestat.us"
      },
      {
        protocol: "https",
        hostname: "wiki.warframe.com"
      },
      {
        protocol: "https",
        hostname: "www-static.warframe.com"
      }
    ]
  }
};

export default nextConfig;
