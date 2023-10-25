// 'use client'
// import { useState } from 'react'

import styles from 'styles/nav.module.css'
import Link from 'next/link'

export default function Nav(){
  return(
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/work">
            Work
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
