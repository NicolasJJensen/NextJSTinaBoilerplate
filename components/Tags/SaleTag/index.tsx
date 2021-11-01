
import styles from "./styles.module.scss"

const SaleTag = () => {

  return (
    <div className={styles.tag}>
      <span className={styles.tagSpikes}>
        <svg viewBox="0 0 100 100">
          <polygon points="100 100 100 50 50 100 100 100"/>
          <polygon points="100 50 100 0 50 0 100 50"/>
        </svg>
      </span>
      <span className={styles.wordSpan}>SALE</span>
    </div>
  )
}


export default SaleTag