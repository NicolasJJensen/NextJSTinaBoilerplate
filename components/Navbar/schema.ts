import { TinaField } from '@tinacms/cli'

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

const navbarLinks: TinaField = {
  list: true,
  label: 'Links',
  name: 'Links',
  type: 'object',
  fields: [
    navbarLinkLabel,
    navbarLinkURL,
  ],
}

const navbar = {
  label: 'Basic Navbar',
  name: 'basicNavbar',
  type: 'object',
  fields: [
    navbarLogo,
    navbarLinks,
    navbarFixed,
    navbarLayouts,
  ],
}

export default navbar
