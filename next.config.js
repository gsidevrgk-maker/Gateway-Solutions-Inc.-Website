/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Disables ESLint errors from blocking production builds on Vercel
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;