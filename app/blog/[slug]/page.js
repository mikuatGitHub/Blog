// blog/[slug]
import { getPostBySlug, getAllSlugs } from "lib/api"
import { extractText } from "lib/extract-text"
import { prevNextPost } from "lib/prev-next-post"

import Container from "components/container"
import BlogHeader from "components/blog-header"
import BlogBody from "components/blog-body"

import { TwoColumn, TwoColumnMain, TwoColumnSide } from "components/twocolumn"
import ConvertBody from "components/convert-body"
import PostCategories from "components/post-categories"

import Pagination from "components/pagination"

import Image from "next/image"
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from "plaiceholder"


export default async function Post({params}) {
  const slug = params.slug
  const post = await getPostBySlug(slug)
  const {
    title,
    publishDate: publish,
    content,
    categories,
  } = post

  const description= extractText(content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  // const { base64 } = await getPlaiceholder(eyecatch.url)
  // eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()

  const [prevPost, nextPost]= prevNextPost(allSlugs, slug)

  return (
    <Container>
      <article>
        <BlogHeader
          title={title}
          subtitle="Blog Article"
          publish={publish}
        ></BlogHeader>

        <figure>
          <Image
            priority
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px)1152px, 100vw"
            style={{ width: "100%", height: "auto" }}
            // placeholder="blur"
            // blurDataURL={eyecatch.blurDataURL}
          ></Image>
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <BlogBody>
              <ConvertBody contentHTML={content}></ConvertBody>
            </BlogBody>
          </TwoColumnMain>

          <TwoColumnSide>
            <PostCategories categories={categories}></PostCategories>
          </TwoColumnSide>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`
          }></Pagination>

      </article>
    </Container>
  );
}

// SSR
export const dynamicParams= false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()

  return allSlugs.map(
    ({Slug}) => {
      return { slug: Slug }
    }
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {slug: '1month'}},
    ],
    fallback: false
  }
}

export const metadata = {
  title: "blog-page",
};
