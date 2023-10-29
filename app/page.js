// /index
import Image from 'next/image'
import pic from 'images/home.jpg'

import Container from 'components/container'
import Hero from 'components/hero'

import { TwoColumn,TwoColumnMain,TwoColumnSide } from 'components/twocolumn'
import Doc from 'components/doc'
import Contact from 'components/contact'


// 描画処理
export default function Home() {
  return (
    <Container>
      <Hero title="Home" subtitle="ポートフォリオサイト" imageOn></Hero>

        {/* <Image
          priority
          src= {pic}
          alt= ""
          width= {1152}
          height= "auto"
          // 領域 1152<*, *<1152
          sizes="(min-width:1152px)1152px, 100vw"
          // レスポンシブ
          style= {{ width: '100%', height: 'auto' }}
        ></Image> */}

      <TwoColumn>

        <TwoColumnMain>
          <Doc></Doc>
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
