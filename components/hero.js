import styles from 'styles/hero.module.css'

import Image from 'next/image'
const pic = {
  src: "https://images.microcms-assets.io/assets/05c7fd8a7db44577a0b0f4ee9821c2f6/ec6ec1ff4e81426f8fbf91bf57cea8bf/main-bg.jpg",
  height: 1600,
  width: 1066,
  blurDataUrl: 'data:image/jpeg;base64',
};


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
              // 領域
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
