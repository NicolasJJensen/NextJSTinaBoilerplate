import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import client from '@/helpers/shopify-client'
import styles from '@/styles/index.module.scss'
import { useEffect, useState } from 'react'

function ProductCard(props: any) {
  console.log(props)
  return (
    <div className={styles.productCard}>
      <div>
        {props.images.map((image: any) => (
          <Image key={image.id} objectFit='cover' src={client.image.helpers.imageForSize(image, {maxWidth: 500, maxHeight: 500})} alt={image.altText} layout='fill' />
        ))}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

const Home: NextPage = (props: any) => {
  console.log(props)
  return (
    <>
      <Head>
        <title>A Little Lacey</title>
        <meta name="description" content="Little girls dresses shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.productsList}>
        {props.products.map((product: any) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <a>
              <ProductCard {...product} />
            </a>
          </Link>
        ))}
      </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await client.product.fetchAll() // Fetch product
  const info = await client.shop.fetchInfo() // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies() // fetch shop policy if you have any

  return {
    props: {
      info: JSON.parse(JSON.stringify(info)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
