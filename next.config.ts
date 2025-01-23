import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: 'tic-tac-toe-next',
  assetPrefix: '/tic-tac-toe-next/',
  reactStrictMode: true,
};

export default nextConfig;
