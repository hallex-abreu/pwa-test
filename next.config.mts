import { default as withPWA } from "@ducanh2912/next-pwa";
import { NextConfig } from 'next';

const pwaOptions: any = {
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    // image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
};

const nextConfig: NextConfig = {
  // ... other options you like
};

const withPWAConfig = withPWA(pwaOptions);

export default withPWAConfig(nextConfig);