// homeページの文章セクション

import styles from 'styles/document.module.css'

export default function Document() {
  return (
    <div className={styles.stack}>

      <h2>自己紹介</h2>
      <p>フロントエンドエンジニアに転職したく、プログラミングを独学で勉強しています。</p>
      <p>ReactとNext.jsを使用してポートフォリオサイトを立ち上げました。</p>

      <h2>経歴</h2>
      <p>大学では環境工学を専攻。現職ではネットワーク系の業務をしています。</p>

    </div>
  )
}
