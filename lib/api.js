import { createClient } from "microcms-js-sdk";
// Client登録
export const client = createClient({
  serviceDomain: "miku-blog",
  apiKey: process.env.API_KEY,
})

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
