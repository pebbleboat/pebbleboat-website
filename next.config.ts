/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
