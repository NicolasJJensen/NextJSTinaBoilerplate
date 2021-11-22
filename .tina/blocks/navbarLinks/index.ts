import { TinaField } from '@tinacms/cli'

const navbarLinks: TinaField = {
  type: 'object',
  list: true,
  label: 'Navbar Links',
  name: 'navbarLinks',
  fields: [
    {
      type: 'string',
      label: 'Label',
      name: 'label'
    },
    {
      type: 'string',
      label: 'URL',
      name: 'url'
    }
  ]
}

export default navbarLinks