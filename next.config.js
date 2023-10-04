/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig
module.exports = {  
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  }