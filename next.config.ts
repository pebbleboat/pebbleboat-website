import type { NextConfig } from "next";

// Enforce a single canonical host (apex) to avoid duplicate content between www/non-www.
// We normalize any provided URL to strip the www prefix so redirects always point to apex.
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";
const normalizedHost = new URL(configuredSiteUrl).host.replace(/^www\./, "");
const primaryHost = normalizedHost; // always apex
const alternativeHost = `www.${normalizedHost}`; // www version always redirected

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
