
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import client from '@/helpers/shopify-client'
import { useRouter } from 'next/router'

const ProductPage: NextPage = (props: any) => {
  const router = useRouter()
  const { productId } = router.query

  return (
    <>
      <Head>
        <title>{props.product.title}</title>
        <meta name="description" content={props.product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{props.product.title}</h1>
        <h1>{props.product.description}</h1>
      </main>
    </>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const product = await client.product.fetch(context.query.productId as string) // Fetch product
  const info = await client.shop.fetchInfo() // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies() // fetch shop policy if you have any

  return {
    props: {
      info: JSON.parse(JSON.stringify(info)),
      policies: JSON.parse(JSON.stringify(policies)),
      product: JSON.parse(JSON.stringify(product)),
    },
  }
}
