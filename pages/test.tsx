import type { GetStaticProps, NextPage } from 'next'

import { staticRequest } from 'tinacms'
import TinaGQLQuery, { PropsType, ReturnedGQLDataType } from '@/lib/gql/testPageQuery'

const Test: NextPage<PropsType> = (props) => {

  return (
    <main>
    </main>
  )
}

export default Test

export async function getStaticProps() {
  const variables = { relativePath: 'test.json' }
  const data: ReturnedGQLDataType = (await staticRequest({ query: TinaGQLQuery, variables: variables })) as ReturnedGQLDataType

  return {
    props: {
      variables: variables,
      query: TinaGQLQuery,
      data: data,
    }
  }
}
