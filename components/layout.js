// ルートレイアウトにimportされるcomponent
// jsx構文では要素は一つ、<React.Fragment>が最上位の要素
import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout( props ){
  return(
    <React.Fragment>
      <Header />
        <main>{ props.children }</main>
      <Footer />
    </React.Fragment>
  )
}
