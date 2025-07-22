import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ✅ deve estar dentro de "compiler"
  },
};

export default nextConfig;
