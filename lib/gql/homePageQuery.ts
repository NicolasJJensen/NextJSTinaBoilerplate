import createFullQuery from './createFullQuery'
import { HomePageContentPartsFragmentDoc } from '@/tina/__generated__/types'

const homePageQuery = `
getHomePageContentDocument(relativePath: "home.json") {
  data {
    ...HomePageContentParts
  }
}
`

export default createFullQuery(homePageQuery) + HomePageContentPartsFragmentDoc
