import type { NextConfig } from "next";

// Enforce a single canonical host to avoid duplicate content between www/non-www.
const canonicalUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";
const primaryHost = new URL(canonicalUrl).host;
const alternativeHost = primaryHost.startsWith("www.")
  ? primaryHost.replace(/^www\./, "")
  : `www.${primaryHost}`;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: alternativeHost,
          },
        ],
        destination: `https://${primaryHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
