import navbarQuery from './navbarQuery'
import footerQuery from './footerQuery'

import { NavbarPartsFragmentDoc, FooterPartsFragmentDoc } from '@/tina/__generated__/types'

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
