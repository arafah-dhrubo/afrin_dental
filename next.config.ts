import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/services/laser",
        destination: "/services/surgery",
        permanent: true,
      },
      {
        source: "/services/cosmetic",
        destination: "/services/filling",
        permanent: true,
      },
      {
        source: "/root-canal",
        destination: "/root-canal-treatment-dhaka",
        permanent: true,
      },
      {
        source: "/emergency",
        destination: "/emergency-dentist-dhaka",
        permanent: true,
      },
      {
        source: "/emergency-care",
        destination: "/emergency-dentist-dhaka",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
