import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Container from "components/container";
import BlogHeader from "components/blog-header";
import Posts from "components/posts";

import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default async function Category({ params }) {
  const catSlug = params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);
  const name = cat.name;

  const posts = await getAllPostsByCategory(cat.id);

  // for (const post of posts) {
  //   if (!post.hasOwnProperty("eyecatch")) {
  //     post.eyecatch = eyecatchLocal;
  //   }
  //   const { base } = await getPlaiceholder(post.eyecatch.url);
  //   post.eyecatch.blurDataURL = base;
  // }

  return (
    <Container>
      <BlogHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCats = await getAllCategories();

  return allCats.map(({ Slug }) => {
    return { slug: Slug };
  });
}
