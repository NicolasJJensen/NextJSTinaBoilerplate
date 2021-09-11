import type { NextPage } from 'next'
import Head from 'next/head'

import RatingStars from '@/components/RatingStars'
import HoverFilterButton from '@/components/HoverFilterButton'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

const Test: NextPage = (props: any) => {

  const myLoader=()=>{
    return 'https://d2j6dbq0eux0bg.cloudfront.net/images/2047086/2305759774.jpg'
  }

  return (
    <>
      <Head>
        <title>A Little Lacey</title>
        <meta name="description" content="Little girls dresses shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RatingStars rating={3.8} reviews={13} />
        
        <HoverFilterButton>
          <Image 
            loader={myLoader}
            src="https://d2j6dbq0eux0bg.cloudfront.net/images/2047086/2305759774.jpg"
            alt=''
            height={300}
            width={300}
          />
        </HoverFilterButton>

      </main>
    </>
  )
}

export default Test
