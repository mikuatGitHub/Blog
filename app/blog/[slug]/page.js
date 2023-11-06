// blog/[slug]
import { getPostBySlug, getAllSlugs } from "lib/api";
import { prevNextPost } from "lib/prev-next-post";

import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import ConvertBody from "components/convert-body";

import Pagination from "components/pagination";

import Image from "next/image";
import { eyecatchLocal } from "lib/constants";

// SSG
export const dynamicParams = false;
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs.map(
    ({ Slug }) => {
    return { slug: Slug };/* フォルダ名slug */
   });
}

// export async function getStaticPaths() {
//   const allSlugs = await getAllSlugs();
//   const paths= allSlugs.map((slug)=> `/blog/${slug}`)
//   return {
//     paths,
//     fallback: false,
//   }
// }

// 非同期処理
export default async function Slug({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const { title, publishDate: publish, content } = post;
  const eyecatch = post.eyecatch ?? eyecatchLocal

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

        <PostBody>
          <ConvertBody contentHTML={content}></ConvertBody>
        </PostBody>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        ></Pagination>

    </Container>
  );
}


export const metadata = {
  title: "blog-page",
};
