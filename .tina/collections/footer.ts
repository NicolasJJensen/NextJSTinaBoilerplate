import { TinaCollection } from '@tinacms/cli'
import footerNavSections from '../blocks/footerNavSections'

const footerCollection: TinaCollection = {
  path: 'content/footer',
  label: 'Footer',
  name: 'footer',
  format: 'json',
  fields: [
    footerNavSections
  ]
}

export default footerCollection
