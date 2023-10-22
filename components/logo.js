import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Logo({boxOn= false}){
  return(
    <Link legacyBehavior href="/">
      <a className={boxOn ? styles.box : styles.basic}>logo</a>
    </Link>
  )
}
