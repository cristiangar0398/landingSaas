import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'], 
  },
};

export default nextConfig;