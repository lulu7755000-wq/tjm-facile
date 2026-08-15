/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export 100 % statique : aucun serveur, idéal pour GitHub Pages
  output: "export",
  // Le site est hébergé sous https://lulu7755000-wq.github.io/tjm-facile
  basePath: "/tjm-facile",
  // Génère /blog/calcul-tjm/index.html (URLs propres sur GitHub Pages)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
