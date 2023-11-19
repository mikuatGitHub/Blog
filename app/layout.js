// rootLayout
import 'app/globals.css';
import Layout from 'components/layout'

// メタデータのためのimport
import {
  baseMetadata,
  openGraphMetadata,
  twitterMetadata,
} from 'lib/baseMetadata'
import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

// FontAwesome for Nextjs
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false/* 自動個別適用を無効化 */

// render
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
