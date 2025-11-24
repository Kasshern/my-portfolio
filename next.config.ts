import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.accredible.com',
        pathname: '/v1/frontend/credential_website_embed_image/**',
      },
    ],
  },
};

export default nextConfig;
