import { TinaCollection } from '@tinacms/cli'
import navbarLinks from '../blocks/navbarLinks'

const navbarCollection: TinaCollection = {
  path: 'content/navbar',
  label: 'Navbar',
  name: 'navbar',
  format: 'json',
  fields: [
    navbarLinks
  ]
}

export default navbarCollection
