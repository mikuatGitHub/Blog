// blog/[slug]
import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { prevNextPost } from "lib/prev-next-post";

import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";

import { TwoColumn, TwoColumnMain, TwoColumnSide } from "components/twocolumn";
import ConvertBody from "components/convert-body";
import PostCategories from "components/post-categories";

import Pagination from "components/pagination";

import Image from "next/image";
import { eyecatchLocal } from "lib/constants";

export default async function Post({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const { title, publishDate: publish, content, categories } = post;

  const description = extractText(content);

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const allSlugs = await getAllSlugs();

  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return (
    <Container>
      
        <PostHeader
          title={title}
          publish={publish}
        ></PostHeader>

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
          ></Image>
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content}></ConvertBody>
            </PostBody>
          </TwoColumnMain>

          <TwoColumnSide>
            <PostCategories categories={categories}></PostCategories>
          </TwoColumnSide>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        ></Pagination>

    </Container>
  );
}

// SSR
export const dynamicParams = false;
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs.map(({ Slug }) => {
    return { slug: Slug };
  });
}

export const metadata = {
  title: "blog-page",
};
