/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true  // Static Export 필수, Vercel 이미지 최적화 대신
  },
  compress: true,
  generateEtags: true,
  poweredByHeader: false
}

module.exports = nextConfig;
