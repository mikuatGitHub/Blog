// /blog
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'

import { getAllPosts } from 'lib/api'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <Container>
      <Hero title="Blog" subtitle="microCMSと連携したブログ"></Hero>
      <Posts posts={posts} ></Posts>
    </Container>
  )
}

export const metadata = {
  title: 'blog',
}
