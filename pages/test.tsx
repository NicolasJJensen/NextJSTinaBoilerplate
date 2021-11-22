import type { NextPage } from 'next'
import Head from 'next/head'

import RatingStars from '@/components/RatingStars'
import ProductCard from '@/components/ProductCard'
import Image from '@/components/Image'
import { staticRequest } from 'tinacms'

const Test: NextPage = (props: any) => {

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
  const query = `#graphql
    query PageQuery($relativePath: String!) {
      getNavbarDocument(relativePath: "navbar.json") {
        data {
          navbarLinks {
            label
            url
          }
        }
      }
      getFooterDocument(relativePath: "footer.json") {
        data {
          navSections {
            title
            links {
              label
              url
            }
          }
        }
      }
    }
  `

  const variables = { relativePath: 'test.json' }

  const data: any = await staticRequest({
    query: query,
    variables: variables
  })

  return {
    props: {
      query,
      variables,
      data,
    }
  }
}