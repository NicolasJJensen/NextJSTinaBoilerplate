import { navLinks, navSectionLabel } from './fields'
import { TinaField } from '@tinacms/cli'

const navSections: TinaField = {
  type: 'object',
  list: true,
  label: 'Nav Sections',
  name: 'navSections',
  fields: [
    navLinks,
    navSectionLabel
  ]
}

export default navSections