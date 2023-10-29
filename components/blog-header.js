import styles from "styles/blog-header.module.css"

import ConvertDate from "components/convert-date"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export default function BlogHeader({ title, subtitle, publish = "" }) {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{ subtitle }</p>
      <h1 className={styles.title}>{ title }</h1>
      { publish && (
        <div>
          <FontAwesomeIcon icon={ faClock } size="lg" color="var(--gray-25)"></FontAwesomeIcon>
          <ConvertDate dateISO={ publish }></ConvertDate>
        </div>
      ) }
    </div>/* stack */
  )
}