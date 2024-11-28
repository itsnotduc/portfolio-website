/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    serverActions: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  }
};

module.exports = nextConfig;
