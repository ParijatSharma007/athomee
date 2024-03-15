/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_GOOGLE_API_KEY: process.env.NEXT_GOOGLE_API_KEY,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "randomuser.me",
      "athomee-admin.dedicateddevelopers.us",
    ],
  },
};

module.exports = {
  ...nextConfig,
};
