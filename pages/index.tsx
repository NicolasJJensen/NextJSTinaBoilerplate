import type { NextPage } from 'next'

// import client from '@/helpers/shopify-client'
import styles from '@/styles/index.module.scss'
import useLoadingUrl from '@/hooks/useLoadingUrl'

import { staticRequest } from 'tinacms'
import TinaGQLQuery, { PropsType, ReturnedGQLDataType } from '@/lib/gql/homePageQuery'


const Home: NextPage = (props: any) => {
  const loadingUrl = useLoadingUrl()

  return (
    <main className={styles.productsList}>
      {/* {props.products.map((product: any) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <a>
            <ProductCard {...product} new={true} outOfStock={true} sale={true} bestSeller={false} whRatio={0.75} loading={loadingUrl === `/product/${product.id}`} />
          </a>
        </Link>
      ))} */}
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const variables = { relativePath: 'home.json' }
  const data: ReturnedGQLDataType = (await staticRequest({ query: TinaGQLQuery, variables: variables })) as ReturnedGQLDataType

  return {
    props: {
      variables: variables,
      query: TinaGQLQuery,
      data: data,
    }
  }
}

// This function runs before the page is rendered
// Use to get all product information
// (You can get specific types of products, e.g. onSale, frontPage, etc)
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const products = await client.product.fetchAll() // Fetch product
//   const info = await client.shop.fetchInfo() // Fetch shop Info if you think about SEO and title and ... to your page
//   const policies = await client.shop.fetchPolicies() // fetch shop policy if you have any

//   return {
//     props: {
//       info: JSON.parse(JSON.stringify(info)),
//       policies: JSON.parse(JSON.stringify(policies)),
//       products: JSON.parse(JSON.stringify(products))
//     }
//   }
// }
