// 外部サイト画像を使用するためremotePatternを設定

/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  // output: 'export',

  reactStrictMode: true,
  images: {
  //   loader: 'imgix',
  //   path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
    // domains: ['images.microcms-assets.io']
  },
};

module.exports= nextConfig
