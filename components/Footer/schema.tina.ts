import { TinaField } from '@tinacms/cli'

const sections: TinaField = {
  name: 'Sections',
  label: 'sections',
  type: 'object',
  list: true,
  templates: [

  ],
}

const footerSchema = {
  path: 'content/footer',
  label: 'Footer',
  name: 'footer',
  format: 'json',
  fields: [
    sections,
  ],
}

export default footerSchema
