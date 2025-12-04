/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/proxy/:path*',
          destination: 'https://projectapi.gerasim.in/api/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
