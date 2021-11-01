import Image from '@/components/Image'

import client from '@/helpers/shopify-client'
import styles from './productCard.module.scss'
import RatingStars from '@/components/RatingStars'

import SaleTag from '@/components/Tags/SaleTag'
import OutOfStockTag from '../Tags/OutOfStockTag'
import NewTag from '../Tags/NewTag'
import BestSellerTag from '@/components/Tags/BestSellerTag'

type propsType = {
  loading: boolean,
  outOfStock: boolean,
  sale: boolean,
  new: boolean,
  bestSeller: boolean,
  images: Array<{
    id: string,
    src: string,
    altText: string
  }>,
  id: string,
  title: string,
  description: string,
}

const defaultProps = {
  outOfStock: false,
  sale: false,
  new: false,
  bestSeller: false
}

ProductCard.defaultProps = defaultProps

export default function ProductCard(props: propsType) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imgDiv}>
        {props.images.slice(-2).reverse().map(image => (
          <Image
          key={image.id}
          // // @ts-expect-error
          // client.image.helpers.imageForSize(image, {maxWidth: 500, maxHeight: 500})
          src={image.src}
          alt={image.altText}
          />
          ))}
          { props.sale ? <SaleTag /> : '' }
          { props.outOfStock ? <OutOfStockTag /> : '' }
          { props.bestSeller ? <BestSellerTag /> : props.new ? <NewTag /> : '' }
      </div>
      <div className={styles.titleRating}>
        <span className={styles.heading}>{props.loading ? 'Loading...' : props.title}</span>
        <RatingStars rating={3.5} reviews={13} />
      </div>
    </div>
  )
}
