import type { NextPage } from 'next'

import { staticRequest } from 'tinacms'
import TinaGQLQuery, { PropsType, ReturnedGQLDataType } from '@/lib/gql/homePageQuery'

const Home: NextPage<PropsType> = (props) => {
  return (
    <main>
      {props.homePageData?.sections?.map((section, i) => (
        <div key={i}>
          {section?.__typename === 'HomePageSectionsTrustIcons' && section.badges?.map((badge, j) => (
            <div key={j} >{badge?.text}</div>
          ))}
        </div>
      ))}
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
