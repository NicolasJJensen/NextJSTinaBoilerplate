import navbarQuery from './navbarQuery'
import footerQuery from './footerQuery'

import { NavbarPartsFragmentDoc, FooterPartsFragmentDoc, Navbar, Footer } from '@/tina/__generated__/types'

// This creates a query, by combining queries that are global with a query for a single page
// e.g. navbar, footer, seo, etc
export default function createFullQuery(query: string) {
  return `
  query GetData {
    ${query}
    ${navbarQuery}
    ${footerQuery}
  }
  ${NavbarPartsFragmentDoc}
  ${FooterPartsFragmentDoc}
  `
}

// This function takes a string with the name of a collection
// Then it maps the data (from the structure of the above query) so the data is ready for page props
function mapData<T>(data: BaseGQLType & any, otherDataName: string): {navbar: Navbar, footer: Footer } & T {
  console.log(data)
  return {
    navbar: data.getNavbarDocument.data,
    footer: data.getFooterDocument.data,
    ...data[`get${otherDataName}Document`].data,
  }
}

type BaseGQLType = {
  getNavbarDocument: { data: Navbar },
  getFooterDocument: { data: Footer },
}

export { mapData }
export type { BaseGQLType }