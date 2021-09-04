import Image from 'next/image'

import client from '@/helpers/shopify-client'
import styles from './productCard.module.scss'

type propsType = {
  loading: boolean,
  images: Array<{
    id: string,
    src: string,
    altText: string
  }>,
  id: string,
  title: string,
  description: string
}

export default function ProductCard(props: propsType) {
  return (
    <div className={styles.productCard}>
      <div>
        {props.images.map((image: any) => (
          <Image
            key={image.id}
            // @ts-expect-error
            src={client.image.helpers.imageForSize(image, {maxWidth: 500, maxHeight: 500})}
            alt={image.altText}
            layout='fill'
            objectFit='cover'
          />
        ))}
      </div>
      <h2>{props.loading ? 'Loading...' : props.title}</h2>
      <p>{props.loading ? 'Loading...' : props.description}</p>
    </div>
  )
}
