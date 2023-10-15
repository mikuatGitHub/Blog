import Image from 'next/image'
import styles from './page.module.css'

import Hero from 'components/hero'

export default function Home() {
  return (
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
  )
}
