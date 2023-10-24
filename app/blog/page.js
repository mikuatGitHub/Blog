import { getAllPosts } from 'lib/api'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <Container>
      <Hero title="Blog" subtitle="Recent Posts"></Hero>
      <Posts posts={posts}></Posts>
    </Container>
  )
}

export const metadata = {
  title: 'blog',
}
