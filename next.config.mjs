/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        // hostname: ["scottypumpkin.com", "usfranc.com"],
        // port: "",
        // pathname: "/**",
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
