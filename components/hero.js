import styles from 'styles/hero.module.css'

import Image from 'next/image'
import pic from 'images/main-bg.jpg'


export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>

        <div className={styles.textbox}>
          <h1 className={styles.title}>{ title }</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {imageOn && (
          <figure>
            <Image
              priority
              src={pic}
              alt="main-bg"
              width={576}
              height="auto"
              // レスポンシブ 1152<* , 768*<1152 , *<768
              sizes="(min-width:1152px) 576px,(min-width:768px) 50vw,100vw"
              style={{ width:'100%', height:'auto' }}
            ></Image>
          </figure>
        )}

      </div>/* flexContainer */
  )
}
