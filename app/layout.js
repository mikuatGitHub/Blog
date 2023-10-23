// ルートレイアウト
import 'styles/globals.css';
import Layout from 'components/layout';

// メタデータimport
import { siteMeta } from 'lib/constants';
const { siteLang } = siteMeta;
import {
  baseMetadata,
  openGraphMetadata,
  twitterMetadata,
} from 'lib/baseMetadata'

// アイコンライブラリFontAwesomeのNextjs用設定
// スタイルを全体に適用する、個別適用を無効化
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false


export default function RootLayout({children}) {
  return (
    <html lang={siteLang}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export const metadata = {
  ...baseMetadata,

  openGraph: {
    ...openGraphMetadata,
  },

  twitter: {
    ...twitterMetadata,
  },
};
