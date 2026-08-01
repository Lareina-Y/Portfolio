import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext's local Cloudflare runtime does not expose an ASSETS binding to
  // the image optimizer. Serve bundled portfolio images directly instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
