import styles from 'styles/header.module.css'

import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'

export default function Header(){
  return(
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn></Logo>
          <Nav></Nav>
        </div>
      </Container>
    </header>
  )
}
