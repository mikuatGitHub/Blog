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
export async function getAllSlugs() {
  const slugs = await client
    .get({
      endpoint: "blogs",
      queries: {
        fields: 'title,slug',
        orders: '-createdAt',
      },
    })

  return slugs.contents
}

// 全てのPostを収集
export async function getAllPosts() {
  const posts = await client
    .get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-createdAt',
      },
    })
  return posts.contents
}

export async function getAllCategories() {
  const categories = await client
    .get({
      endpoint: 'category',
      queries: {
        fields: 'name,id,slug',
      },
    })
  return categories.contents
}

export async function getAllPostsByCategory( catID ) {
  const posts = await client
    .get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: 'publishDate',
        limit: 100,
      },
    })
  return posts.contents
}
