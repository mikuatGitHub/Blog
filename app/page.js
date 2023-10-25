// /index
import Container from 'components/container'
import Hero from 'components/hero'

// Homeの描画処理
export default async function Home() {
  return (
    <Container>
      <Hero title="HOME" subtitle="ポートフォリオサイト" imageOn></Hero>
    </Container>
  )
}
