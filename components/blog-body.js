import styles from 'styles/blog-body.module.css'

export default function BlogBody({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
