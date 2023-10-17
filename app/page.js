// /index
// componentのHeroを返す
import Image from 'next/image'
import styles from './page.module.css'

import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn></Hero>
    </Container>
  )
}
