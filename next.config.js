/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "banner2.cleanpng.com",
      "c4.wallpaperflare.com",
      "image.tmdb.org",
    ],
  },
};

module.exports = nextConfig;
