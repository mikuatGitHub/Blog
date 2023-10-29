// /index
import Container from 'components/container'
import Hero from 'components/hero'
import { TwoColumn,TwoColumnMain,TwoColumnSide } from 'components/twocolumn'
import Document from 'components/document'
import Contact from 'components/contact'


// 描画処理
export default function Home() {
  return (
    <Container>
      <Hero title="HOME" subtitle="React(Next.js)を使用したポートフォリオサイト" imageOn></Hero>

      <TwoColumn>
        <TwoColumnMain>
          <Document></Document>
        </TwoColumnMain>
        <TwoColumnSide>
          <Contact></Contact>
        </TwoColumnSide>
      </TwoColumn>
    </Container>
  )
}

export const metadata = {
  title: 'home',
}
