/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  images: {
    domains: ["suitmedia.static-assets.id", "suitmedia-backend.suitdev.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://suitmedia-backend.suitdev.com/api/:path*",
      },
    ];
  },
};
