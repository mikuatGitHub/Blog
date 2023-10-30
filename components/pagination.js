import styles from "styles/pagination.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Pagination({
  prevText= '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className={styles.flexContainer}>

      {prevText && prevUrl && (
        <li>
          <Link href= {prevUrl} className= {styles.label}>
            <FontAwesomeIcon icon= {faChevronLeft}></FontAwesomeIcon>
            <span>prev: {prevText}</span>
          </Link>
        </li>
      )}

      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href= {nextUrl} className= {styles.label}>
            <span>{nextText} :next</span>
            <FontAwesomeIcon icon= {faChevronRight}></FontAwesomeIcon>
          </Link>
        </li>
      )}

    </ul>
  )
}
