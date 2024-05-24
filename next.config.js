/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
//Hook the server actions
module.exports = nextConfig;
