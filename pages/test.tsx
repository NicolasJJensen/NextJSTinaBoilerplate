import type { NextPage } from 'next'
import Head from 'next/head'

import RatingStars from '@/components/RatingStars'
import ProductCard from '@/components/ProductCard'
import Image from '@/components/Image'

import { staticRequest } from 'tinacms'
import TinaGQLQuery, { PropsType, ReturnedGQLDataType, mapDataForProps } from '@/lib/gql/homePageQuery'

const Test: NextPage<PropsType> = (props) => {
  return (
    <>
      <Head>
        <title>A Little Lacey</title>
        <meta name="description" content="Little girls dresses shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image 
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/2047086/2305759774.jpg"
          alt=''
          hoverButton={false}
          border={true}
          minImgWidth={300}
          maxImgWidth={650}
          whRatio={12/9}
        />
      </main>
    </>
  )
}

export default Test

export async function getStaticProps() {
  const variables = { relativePath: 'home.json' }
  const data: ReturnedGQLDataType = (await staticRequest({ query: TinaGQLQuery, variables: variables })) as ReturnedGQLDataType

  return {
    props: {
      variables: variables,
      query: TinaGQLQuery,
      ...mapDataForProps(data)
    }
  }
}
