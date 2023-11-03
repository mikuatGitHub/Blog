// ブログ一覧ページ

import { getAllPosts } from 'lib/api'

import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import { TwoColumn } from 'components/twocolumn'
import { TwoColumnMain } from 'components/twocolumn'
import { TwoColumnSide } from 'components/twocolumn'

// 外部画像を読み込めなかった時の代替画像とブラー画像を用意
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

// 外部データの取り込みを非同期処理
export default async function Blog() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    //   const { base64 } = await getPlaiceholder(post.eyecatch.url);
  //   post.eyecatch.blurDataURL = base64;
}

  return (
    <Container>
      <Hero title="Blog" subtitle="microCMSと連携したブログ"></Hero>

      <TwoColumn>
        <TwoColumnMain>
          <Posts posts={posts} ></Posts>
        </TwoColumnMain>
        <TwoColumnSide>
          <h2>category</h2>
        </TwoColumnSide>
      </TwoColumn>
    </Container>
  )
}

// export async function getStaticProps() {
//   const allposts = await getAllPosts()
//   return {
//     props: {
//       posts: allposts,
//     },
//   }
// }

export const metadata = {
  title: 'blog',
}
