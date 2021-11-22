import { TinaField } from '@tinacms/cli'

export const navLinks: TinaField = {
  type: 'object',
  list: true,
  label: 'Navigation Links',
  name: 'links',
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

export const navSectionLabel: TinaField = {
  type: 'string',
  label: 'Section Title',
  name: 'title'
}
