// ブログ投稿一覧
import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <div className={styles.stack}>

      {Object.values(posts).map(({ title,slug,eyecatch }) => (
        <article className={styles.post} key={slug}>

          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                priority
                src= {eyecatch.url}
                alt=""
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width:1152px)576px, 50vw"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </figure>

            <h2>{title}</h2>
          </Link>

        </article>
      ))}

    </div>/* stack */
  );
}
