import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["3.107.18.59"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
