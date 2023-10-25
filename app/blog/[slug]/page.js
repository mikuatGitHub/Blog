import { getPostBySlug, getAllSlugs } from "lib/api"

import Container from "components/container"
import { TwoColumn, TwoColumnMain, TwoColumnSide } from "components/twocolumn"
import BlogBody from "components/blog-body"
import ConvertBody from "components/convert-body"
import BlogCategories from "components/blog-categories"

import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

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

  // const eyecatch = post.eyecatch ?? eyecatchLocal
  // const { base } = await getPlaiceholder(eyecatch.url)
  // eyecatch.blurDataURL = base

  return (
    <Container>
        <h2>{title}</h2>
        {/* <Image
          priority
          src={eyecatch.url}
          alt=""
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="100vw"
        ></Image> */}

      <TwoColumn>
        <TwoColumnMain>
         <BlogBody>
           <ConvertBody contentHTML={content}></ConvertBody>
          </BlogBody>
       </TwoColumnMain>

        <TwoColumnSide>
          {/* <BlogCategories categories={categories}></BlogCategories> */}
        </TwoColumnSide>
      </TwoColumn>

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

