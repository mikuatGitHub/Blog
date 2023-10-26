import { getPostBySlug, getAllSlugs } from "lib/api"
import { extractText } from "lib/extract-text"
import { prevNextPost } from "lib/prev-next-post"

import Container from "components/container"
import BlogHeader from "components/blog-header"
import BlogBody from "components/blog-body"
import { TwoColumn, TwoColumnMain, TwoColumnSide } from "components/twocolumn"
import ConvertBody from "components/convert-body"
import BlogCategories from "components/blog-categories"

import Pagination from "components/pagination"

import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"
import { eyecatchLocal } from 'lib/constants'

import { siteMeta } from "lib/constants"
const { siteTitle, siteUrl } = siteMeta
import { openGraphMetadata,twitterMetadata } from "lib/baseMetadata"

// 単独記事を描画
export default async function Post({params}) {
  const slug = params.slug
  const post = await getPostBySlug(slug)
  const {
    title,
    publishDate: publish,
    content,
    categories
  } = post
  const description= extractText(content)

  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost]= prevNextPost(allSlugs, slug)

  return (
    <Container>
      <article>
        <BlogHeader title={title} publish={publish}></BlogHeader>

        <figure>
        {/* <Image
          priority
          key={eyecatch.url}
          src={eyecatch.url}
          alt=""
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width: 1152px)1152px, 100vw"
          ></Image> */}
        </figure>

      <TwoColumn>
        <TwoColumnMain>
         <BlogBody>
           <ConvertBody contentHTML={content}></ConvertBody>
          </BlogBody>
       </TwoColumnMain>

        <TwoColumnSide>
          <BlogCategories categories={categories}></BlogCategories>
        </TwoColumnSide>
      </TwoColumn>

      </article>
    </Container>
  )
}


export const dynamicParams= false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()

  return allSlugs.map(
    ({Slug}) => {
      return { slug: Slug }
    }
  )
}

// export async function generateMetadate({ params }) {
//   const slug = params.slug
//   const post = await getPostBySlug(slug)
//   const { title: pageTitle, publishDate: publish, content, categories } = post
//   const pageDesc = extractText(content)
//   const eyecatch = post.eyecatch ?? eyecatchLocal

//   const ogpTitle = `${pageTitle} | ${siteTitle}`
//   const ogpUrl = new URL(`/blogs/${slug}`, siteUrl).toString()

//   const metadata = {
//     title: pageTitle,
//     description: pageDesc,

//     openGraph: {
//       ...openGraphMetadata,
//       title: ogpTitle,
//       description: pageDesc,
//       url: ogpUrl,
//       images: [
//         {
//           url: eyecatch.url,
//           width: eyecatch.width,
//           height: eyecatch.height,
//         },
//       ],
//     },

//     twitter: {
//       ...twitterMetadata,
//       title: ogpTitle,
//       description: pageDesc,
//       images: [eyecatch.url],
//     },
//   }
//   return metadata
// }
