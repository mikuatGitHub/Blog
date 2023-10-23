import Container from 'components/container'
import Hero from 'components/hero'

import { TwoColumn,TwoColumnMain,TwoColumnSide } from 'components/twocolumn'
import Post from 'components/post'
import Contact from 'components/contact'
import Image from 'next/image'
import pic from 'images/about.jpg'
import { images } from 'next.config'


export default function About() {
  return (
    <div>
      <Container>
        <Hero title="About" subtitle="About development activities"></Hero>

        <fugure>
          <Image
            // アイキャッチ画像へのLCP対策
            priority
            // プレースホルダとしてブラー画像を表示
            placeholder='blur'
            // 画像設定
            src={pic}
            alt="about-pic"
            width={1152}
            height="auto"
            // レスポンシブ 1152<*, *<1152
            sizes="(min-width:1152px)1152px, 100vw"
            style={{ width: '100%', height: 'auto' }}
          ></Image>
        </fugure>

        <TwoColumn>

          <TwoColumnMain>
            <Post></Post>
          </TwoColumnMain>

          <TwoColumnSide>
            <Contact></Contact>
          </TwoColumnSide>

        </TwoColumn>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'about',
}
