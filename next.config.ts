import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vela",
  images: {
    unoptimized: true
  }
}

export default nextConfig
