import styles from 'styles/footer.module.css'
import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'

export default function Footer(){
  return (
    <footer>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.flexContainer}>
            <Logo></Logo>
            <Social></Social>
          </div>
        </div>
      </Container>
    </footer>
  )
}
