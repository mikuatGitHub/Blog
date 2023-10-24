import { getPostBySlug, getAllSlugs } from "lib/api";
import Container from "components/container";

export default async function Post({ param }) {
  const slug = params.slug
  const post = await getPostBySlug(slug)
  const {
    title,
    publishDate: publish,
    content,
    categories
  } = post
  const allSlugs= await getAllSlugs()

  return (
    <Container>
      <article></article>
    </Container>
  )
}

export const dynamicParams= false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()

  return allSlugs.map(
    ({ slug }) => {
      return { slug: slug }
    }
  )
}

