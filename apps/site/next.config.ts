import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_BOT_ENDPOINT: process.env.NEXT_PUBLIC_BOT_ENDPOINT,
  },
};

export default nextConfig;
