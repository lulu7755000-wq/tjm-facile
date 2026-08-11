/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export 100 % statique : aucun serveur, idéal pour GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
