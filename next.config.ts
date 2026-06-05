/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pebbleboat.com",
          },
        ],
        destination: "https://pebbleboat.com/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
