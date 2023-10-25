import styles from 'styles/blog-categories.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function BlogCategories({ categories }) {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
        <span className='sr-only'>Categories</span>
      </h3>
      <ul>
        {categories.map(
          ({ name, slug }) => (
            <li key={slug}>
              <Link href={`/blog/category/${slug}`}>{name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
