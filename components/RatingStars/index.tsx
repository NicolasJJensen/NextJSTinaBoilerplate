import { Icon } from '@iconify/react'
import styles from "./styles.module.scss"

type propsType = {
  rating: number,
  reviews?: number,
  icon?: string,
  starColor?: string,
  backgroundStarColor?: string
}

const defaultProps = {
  icon: "ant-design:star-filled"
}

const RatingStars = (props: propsType) => {
  const ratingRemainder = props.rating % 1
  const ratingFull = props.rating - ratingRemainder
  const grayStars = 5 - Math.ceil(props.rating)

  return (
    <span
      className={styles.starRating}
      style={{
        ...(props.starColor ? {'--star-color': props.starColor} : {}),
        ...(props.backgroundStarColor ? {'--background-star-color': props.backgroundStarColor} : {})
      } as any}
    >
      <span className={styles.starIcons}>
        {Array(ratingFull).fill(null).map((_, i) => (
          <span className={styles.fullStar} key={i}>
            <Icon className={styles.iconify} icon={props.icon}/>
          </span>
        ))}

        {Boolean(ratingRemainder) && (
          <span className={styles.partStar}>
            <Icon className={styles.iconify} icon={props.icon}/>
            <div style={{width: `${ratingRemainder * 100}%`}}>
              <Icon className={styles.iconify} icon={props.icon}/>
            </div>
          </span>
        )}

        {Array(grayStars).fill(null).map((_, i) => (
          <span className={styles.grayStar} key={i}>
            <Icon className={styles.iconify} icon={props.icon}/>
          </span>
        ))}
      </span>
      <span className={styles.ratingInfo}>
        <span> {props.rating}</span>
        {props.reviews && <span> (<a href="#">{props.reviews} reviews</a>) </span>}
      </span>
    </span>
  )
}

RatingStars.defaultProps = defaultProps

export default RatingStars
