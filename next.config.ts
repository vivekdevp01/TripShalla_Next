import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pfbppnumtcjfbhkluycb.supabase.co',
      },
    ],
  },
    experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
