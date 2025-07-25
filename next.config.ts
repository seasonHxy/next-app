import type { NextConfig } from "next";

const child_process = require('child_process');
const commitSha = child_process.execSync('git rev-parse HEAD').toString().trim();

const nextConfig: NextConfig = {
  experimental: { 
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  env: {
    COMMIT_SHA: commitSha,
  },
};

export default nextConfig;
