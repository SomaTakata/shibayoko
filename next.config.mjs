/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.howtelevision.co.jp",
      },
      {
        protocol: "https",
        hostname: "zenn.dev",
      },
    ],
  },
};
export default nextConfig;
