import { TinaCollection, TinaField } from '@tinacms/cli'

const navbarLinkLabel: TinaField = {
  type: 'string',
  label: 'Label',
  name: 'label',
}

const navbarLinkURL: TinaField = {
  type: 'string',
  label: 'URL',
  name: 'url',
}

const navbarLinks: TinaField = {
  type: 'object',
  list: true,
  label: 'Navbar Links',
  name: 'navbarLinks',
  fields: [
    navbarLinkLabel,
    navbarLinkURL,
  ],
}

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
