import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Container from "components/container";
import BlogHeader from "components/post-header";
import Posts from "components/posts";

import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default async function Category({ params }) {
  const catSlug = params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);
  const name = cat.name;

  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    // const { base64 } = await getPlaiceholder(post.eyecatch.url);
    // post.eyecatch.blurDataURL = base64;
  }

  return (
    <Container>
      <BlogHeader title={name} subtitle="Blog Category"></BlogHeader>
      <Posts posts={posts}></Posts>
    </Container>
  );
}

// SSR
export const dynamicParams = false;
export async function generateStaticParams() {
  const allCats = await getAllCategories();

  return allCats.map(({ slug }) => {
    return { slug: slug };
  });
}
