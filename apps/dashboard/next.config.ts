import type { NextConfig } from "next";

// import "./src/lib/env";

const nextConfig: NextConfig = {
  /* config options here */

rewrites() {
  return [ 
    {
      source: '/api/:path*',
      destination: `https://stunning-orbit-gpr75pxwrrqc954p-5000.app.github.dev/:path*`,
    }
  ]
},

};

export default nextConfig;


