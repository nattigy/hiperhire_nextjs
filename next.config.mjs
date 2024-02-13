/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["dvd6ljcj7w3pj.cloudfront.net"],
      unoptimized: true,
    },
  };
export default nextConfig;
