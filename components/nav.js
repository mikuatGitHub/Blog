// useStateをクライアント側で処理
'use client'

import styles from 'styles/nav.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  // sp用ハンバーガーメニュー
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev)=> !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

  return(
    <nav className={navIsOpen ? styles.open : styles.close}>

      {/* ボタン */}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>

      {/* リスト */}
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/work" onClick={closeNav}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
