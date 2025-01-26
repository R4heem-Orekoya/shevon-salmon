import type { NextConfig } from "next";
// @ts-check
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      }
    ]
  }
};

export default withPlaiceholder(nextConfig);