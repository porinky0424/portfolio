/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS && "/portfolio",
  trailingSlash: true,
};

module.exports = nextConfig;
