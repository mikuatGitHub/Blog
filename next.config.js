// 外部サイト画像を使用するためremotePatternを設定

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname:
          '/**',
      },
    ],
    // domains: ['images.microcms-assets.io']
  },
};
