import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The products menu opens on a brand catalogue; Dakota is the default brand
    return [{ source: "/products", destination: "/products/dakota", permanent: false }];
  },
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
