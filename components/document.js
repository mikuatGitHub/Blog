// homeページの文章セクション

import styles from 'styles/document.module.css'

export default function Document() {
  return (
    <div className={styles.stack}>

      <h2>自己紹介</h2>
      <p>普段はネットワーク系の業務をしています。</p>

      <h2>経歴</h2>
      <p>大学では環境工学を専攻。</p>

      <h2>今後の目標</h2>
      <p>フロントエンドエンジニアとして学んでいきたい。</p>

    </div>
  )
}
