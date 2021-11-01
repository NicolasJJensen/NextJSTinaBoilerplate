
import styles from "./styles.module.scss"

const BestSellerTag = () => {

  return (
    <div className={styles.tag}>
      <div className={styles.wordDiv}>
        <div>BEST</div>
        <div>SELLER</div>
      </div>
      <div className={styles.tagSpike}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0 100 0 50 50 0 0"/>
        </svg>
      </div>
    </div>
  )
}


export default BestSellerTag