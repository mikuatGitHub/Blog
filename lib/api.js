// 外部データ取得の処理
import { createClient } from "microcms-js-sdk"

// microCMSのユーザ情報
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}`}
    })
    return post.contents[0]
  } catch (err) {
    console.log('error:getPostBySlug')
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug',
        order: '-publishDate',
        limit: limit
      }
    })
    return slugs.cotents
  } catch (err) {
    console.log("err~getAllSlugs")
  }
}

export async function getAllPosts(limit= 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: 'publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('err~getAllPosts')
  }
}
