import { TinaCollection } from '@tinacms/cli'
import navbarSchema from '../../components/Navbar/schema'

const navbarCollection: TinaCollection = {
  path: 'content/navbar',
  format: 'json',
  ...navbarSchema,
}

export default navbarCollection
