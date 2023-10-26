// ブログ投稿一覧セクションを描画

import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

import pic from 'images/work.jpg'

export default function Posts({posts}) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(
      ({ title, slug, eyecatch }) => (
          <article className={styles.post}  key={slug}>
            <Link href={`/blog/${slug}`}>
              <figure>
                <Image
                  src= {pic}
                  alt= ""
                  width= {1152}
                  height= {500}
                  sizes="(min-width: 1152px)576px, 50vw"
                ></Image>
              </figure>

              <h2>{title}</h2>
            </Link>
          </article>
      ))}
    </div>
  )
}
