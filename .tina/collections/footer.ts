import { TinaCollection, TinaField } from '@tinacms/cli'

const navigationRowLinkLabel: TinaField = {
  type: 'string',
  label: 'Label',
  name: 'label',
}

const navigationRowLinkURL: TinaField = {
  type: 'string',
  label: 'URL',
  name: 'url',
}

const navigationRowTitle: TinaField = {
  type: 'string',
  label: 'Title',
  name: 'title',
}

const navigationRowLinks: TinaField = {
  type: 'object',
  list: true,
  label: 'Navigation Links',
  name: 'links',
  fields: [
    navigationRowLinkLabel,
    navigationRowLinkURL,
  ],
}

const navigationRows: TinaField = {
  type: 'object',
  list: true,
  label: 'Navigation Row',
  name: 'navigationRow',
  fields: [
    navigationRowTitle,
    navigationRowLinks,
  ],
}

const footerCollection: TinaCollection = {
  path: 'content/footer',
  label: 'Footer',
  name: 'footer',
  format: 'json',
  fields: [
    navigationRows,
  ],
}

export default footerCollection
