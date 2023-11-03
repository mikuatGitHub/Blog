import styles from "styles/post-header.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"

import ConvertDate from "components/convert-date"

export default function PostHeader({ title,  publish = "" }) {
  return (
    <div className={styles.stack}>

      <h1 className={styles.title}>{title}</h1>

      { publish && (
        <div className= {styles.flexBox}>
          <FontAwesomeIcon icon={ faClock }></FontAwesomeIcon>
          <ConvertDate dateISO={ publish }></ConvertDate>
        </div>/* flexBox */
      )}
      
    </div>/* stack */
  )
}
