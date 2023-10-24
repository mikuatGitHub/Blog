// /index
import Image from 'next/image'
import styles from './page.module.css'

import { getAllPosts } from 'lib/api'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'

export default async function Home() {
  const posts = await getAllPosts(2)

  return (
    <Container>
      <Hero title="HOME" subtitle="ポートフォリオサイト" imageOn></Hero>
      <Posts posts={posts}></Posts>
    </Container>
  )
}
