import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/electro-car',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;