/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable styled-jsx to prevent any conflicts
  compiler: {
    styledJsx: false,
  },
}

export default nextConfig
