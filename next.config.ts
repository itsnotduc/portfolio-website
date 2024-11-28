/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-website',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio-website/',
  trailingSlash: true,
};

module.exports = nextConfig;
