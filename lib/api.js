// microCMSを取得する
import { createClient } from "microcms-js-sdk";
// Client登録
// process.envで環境変数から読み込み
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

// 外部とデータをやりとりする非同期処理
// slugからpostを取得
export async function getPostBySlug(slug) {
  const post = await client
    .get({
      endpoint: "blogs",
      queries: {
        filters: `slug[equals]${slug}`,
      },
    })

  return post.contents[0]
}

// 全てのslugを収集
export async function getAllSlugs(limit=100) {
  const slugs = await client
    .get({
      endpoint: "blogs",
      queries: {
        fields: 'title,slug',
        orders: '-createdAt',
        limit: limit,
      },
    })

  return slugs.contents
}

// 全てのPostを収集
export async function getAllPosts(limit=100) {
  const posts = await client
    .get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-createdAt',
        limit: limit,
      },
    })
  return posts.contents
}

export async function getAllCategories(limit=100) {
  const categories = await client
    .get({
      endpoint: 'category',
      queries: {
        fields: 'id,name,slug',
        limit: limit,
      },
    })
  return categories.contents
}

export async function getAllPostsByCategory(catID,limit=100) {
  const posts = await client
    .get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: 'publishDate',
        limit: limit,
      },
    })
  return posts.contents
}
