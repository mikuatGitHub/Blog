import styles from 'styles/footer.module.css'

import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'

export default function Footer(){
  return (
    <footer className={styles.wrapper}>
      <Container>
          <div className={styles.flexContainer}>
            <Logo></Logo>
            <Social></Social>
          </div>
      </Container>
    </footer>
  )
}
