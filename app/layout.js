// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// ルートレイアウト
import 'styles/globals.css';
import Layout from 'components/layout';

// アイコンライブラリFontAwesomeのNextjs用設定
// スタイルを全体に適用する、個別適用を無効化
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false


export default function RootLayout({children}) {
 return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
