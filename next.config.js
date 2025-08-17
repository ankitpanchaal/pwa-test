/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"

const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  compiler:{
    removeConsole: process.env.NODE_ENV === "production"
  }
};

export default withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
})(nextConfig)
