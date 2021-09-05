import type { NextPage } from 'next'
import Head from 'next/head'

import RatingStars from '@/components/RatingStars'

const Test: NextPage = (props: any) => {

  return (
    <>
      <Head>
        <title>A Little Lacey</title>
        <meta name="description" content="Little girls dresses shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RatingStars rating={3.8} reviews={13} />
      </main>
    </>
  )
}

export default Test
