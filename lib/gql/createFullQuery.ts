import navbarQuery from './navbarQuery'
import footerQuery from './footerQuery'
import seoQuery from './seoQuery'

import { SeoPartsFragmentDoc, NavbarPartsFragmentDoc, FooterPartsFragmentDoc, Seo, Navbar, Footer } from '@/tina/__generated__/types'

// This creates a query, by combining queries that are global with a query for a single page
// e.g. navbar, footer, seo, etc
export default function createFullQuery(query: string) {
  return `
  query GetData($relativePath: String!) {
    ${query}
    ${navbarQuery}
    ${footerQuery}
    ${seoQuery}
  }
  ${NavbarPartsFragmentDoc}
  ${FooterPartsFragmentDoc}
  ${SeoPartsFragmentDoc}
  `
}

// This function takes a string with the name of a collection
// Then it maps the data (from the structure of the above query) so the data is ready for page props
function mapData<T>(data: BaseGQLType & any, otherDataName: string): {navbar: Navbar, footer: Footer } & T {
  return {
    navbar: data.getNavbarDocument.data,
    footer: data.getFooterDocument.data,
    seo: data.getSeoDocument.data,
    ...data[`get${otherDataName}Document`].data,
  }
}

type BaseGQLType = {
  getNavbarDocument: { data: Navbar },
  getFooterDocument: { data: Footer },
  getSeoDocument: { data: Seo },
}

export { mapData }
export type { BaseGQLType }