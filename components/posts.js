// ブログ投稿一覧セクションを描画

import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

import pic from 'images/work.jpg'

export default function Posts(posts) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(
      ({title, slug, eyecatch}) => (
          <article className={styles.post}  key={slug}>
            <Link href={`/blog/${slug}`}>
                {/* <Image
                  src= {eyecatch.url}
                  alt= ""
                  width= {eyecatch.width}
                  height= {eyecatch.height}
                  sizes= '50vw'
                ></Image> */}
              <h2>{ title }</h2>
            </Link>
          </article>
      ))}
    </div>
  )
}
