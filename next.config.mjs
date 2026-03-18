/** @type {import('next').NextConfig} */
// Cache version: 2.0 - brand update
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledJsx: false,
    removeConsole: false,
  },
}

export default nextConfig
