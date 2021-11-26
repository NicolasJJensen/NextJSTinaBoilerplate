import { TinaCollection, TinaField } from '@tinacms/cli'

const title: TinaField = {
  label: 'Title',
  name: 'title',
  type: 'string',
}

const author: TinaField = {
  label: 'Author',
  name: 'author',
  type: 'string',
}

const body: TinaField = {
  label: 'Body',
  name: 'body',
  type: 'string',
  isBody: true,
}

const testPageCollection: TinaCollection = {
  path: 'content/pages/test',
  label: 'Test Page',
  name: 'testPage',
  format: 'json',
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'object',
      list: true,
      fields: [
        title,
        author,
        body,
      ],
    },
  ],
}

export default testPageCollection
