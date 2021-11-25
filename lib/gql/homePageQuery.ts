import createFullQuery, { BaseGQLType, mapData } from './createFullQuery'
import { HomePageContentPartsFragmentDoc, HomePageContent } from '@/tina/__generated__/types'

// Craft GQL query using generated fragments from Tina
const HomePageContentQuery = `
getHomePageContentDocument(relativePath: "home.json") {
  data {
    ...HomePageContentParts
  }
}
`

// This is the data that will be returned from GraphQL when you use the above query
type ReturnedGQLDataType = BaseGQLType & {
  GetHomePageContent: HomePageContent
}

// This name is changed here so when the function is used in a NextJS page
// GetStaticProps can literally be copied for every page
type PropsType = HomePageContent

// Once again a function so that the GetStaticProps function can literally be copied for every page
const mapDataForProps = (data: ReturnedGQLDataType) => mapData<HomePageContent>(data, 'HomePageContent')

// create full query (adds in navbar and footer queries) then add the fragment to the end of the query
export default createFullQuery(HomePageContentQuery) + HomePageContentPartsFragmentDoc

export { mapDataForProps }
export type { PropsType, ReturnedGQLDataType }
