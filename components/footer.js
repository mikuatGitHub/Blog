import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'

export default function Footer(){
  return (
    <footer>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.flexContainer}>
            <Logo></Logo>
            [ソーシャル]
          </div>
        </div>
      </Container>
    </footer>
  )
}
