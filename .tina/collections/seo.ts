import { TinaCollection, TinaField } from '@tinacms/cli'

const title: TinaField = {
  label: 'Title',
  name: 'title',
  type: 'string',
}

const description: TinaField = {
  label: 'Description',
  name: 'description',
  type: 'string',
}

const seoCollection: TinaCollection = {
  path: 'content/seo',
  label: 'SEO',
  name: 'seo',
  format: 'json',
  fields: [
    title,
    description,
  ],
}

export default seoCollection

