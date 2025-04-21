import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/Portfolio',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
