/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Test',
    description: 'Test workspace repo',
    icon: '/img/logo.svg',
    listUrl: 'https://rods787.github.io/kasm-repo/1.0/',
    contactUrl: 'https://rods787.github.io/kasm-repo/1.0/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
