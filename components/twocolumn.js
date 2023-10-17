import styles from 'styles/twocolumn.module.css'

export function TwoColumn({ children }) {
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
}

export function TwoColumnMain({ children }) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export function TwoColumnSide({ children }) {
  return (
    <div className={styles.side}>
      {children}
    </div>
  )
}
