import { TinaCollection, TinaField } from '@tinacms/cli'

const navbarFixed: TinaField = {
  label: 'Fix Navbar to Top',
  name: 'fixed',
  type: 'boolean',
}

const navbarLayouts: TinaField = {
  label: 'Layout',
  name: 'layout',
  type: 'string',
  options: ['Right Aligned Links', 'Left Aligned Links'],
}

const navbarLogo: TinaField = {
  label: 'Logo',
  name: 'logo',
  type: 'string',
}

const navbarLinkLabel: TinaField = {
  label: 'Label',
  name: 'label',
  type: 'string',
}

const navbarLinkURL: TinaField = {
  label: 'URL',
  name: 'url',
  type: 'string',
}

const dropdownLinks: TinaField = {
  label: 'Dropdown Links',
  name: 'nestedLinks',
  type: 'object',
  list: true,
  fields: [
    navbarLinkLabel,
    navbarLinkURL,
  ],
}

const navbarLinks: TinaField = {
  label: 'Navbar Links',
  name: 'links',
  type: 'object',
  list: true,
  fields: [
    navbarLinkLabel,
    navbarLinkURL,
    dropdownLinks,
  ],
}

const navbarCollection: TinaCollection = {
  path: 'content/navbar',
  format: 'json',
  label: 'Navbar',
  name: 'navbar',
  fields: [
    navbarLogo,
    navbarLinks,
    navbarFixed,
    navbarLayouts,
  ],
}

export default navbarCollection
