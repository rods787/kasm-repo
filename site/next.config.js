/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Test',
    description: 'Test workspace repo',
    icon: '/img/logo.svg',
    listUrl: '',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: 'rods787.github.io/kasm-repo/1.0/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
