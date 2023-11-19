// blog/[slug]
import { getPostBySlug, getAllSlugs } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import ConvertBody from "components/convert-body";
import Image from "next/image";

// SSG
// export const dynamicParams = false;
export async function generateStaticParams() {
  const posts =await getAllSlugs()
  // const posts = await fetch('https://.../posts').then((res)=>res.json());

  return posts.map(
    (post) => ({
      slug: post.slug,
    }))/* フォルダ名slug */
}

export default async function Slug({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  const { title, publishDate: publish, content } = post;
  const eyecatch = post.eyecatch

  const allSlugs = await getAllSlugs();

  return (
    <Container>
      <PostHeader title={title} publish={publish}></PostHeader>

      <Image
        priority
        key={eyecatch.url}
        src={eyecatch.url}
        alt=""
        width={eyecatch.width}
        height={eyecatch.height}
        sizes="(min-width: 1152px)1152px, 100vw"
        style={{ width: "30%", height: "auto" }}
      ></Image>

      <PostBody>
        <ConvertBody contentHTML={content}></ConvertBody>
      </PostBody>
    </Container>
  );
}


export const metadata = {
  title: "blog-page",
};
