import style from 'styles/works.module.css'

import Accordion from "components/accordion";

export default function Works() {
  return (
    <div className={style.stack}>

      <Accordion heading="SushiBill -React(JS)">
        <p>コンポーネントを活用し、回転寿司の皿の枚数をカウント。</p>
      </Accordion>
      <Accordion heading="TypingGame -JS">
        <p>設定をカスタマイズしてタイピング。</p>
      </Accordion>
      <Accordion heading="TaskList -Laravel(PHP)">
        <p>会社で日々の担務をホワイトボードに書き出しているが、アプリで再現できないかと考えた。</p>
      </Accordion>
      <Accordion heading="TamakazuBSO -JS">
        <p>野球のBSOと投球数をカウントする。はじめて作ったアプリ。クリック動作の処理と、カウントの設定を頑張った。</p>
      </Accordion>
    </div>

  );
}
