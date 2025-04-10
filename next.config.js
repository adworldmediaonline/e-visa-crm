/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'storageevisa.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
