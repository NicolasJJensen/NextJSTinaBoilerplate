import { TinaField } from '@tinacms/cli'

const socialUrl: TinaField = {
  label: 'Social Link',
  name: 'socialUrl',
  type: 'string',
}

const socialName: TinaField = {
  label: 'Social Name',
  name: 'socialName',
  type: 'string',
} 

const iconUrl: TinaField = {
  label: 'Icon Url',
  name: 'iconUrl',
  type: 'string',
}

const socials = {
  label: 'Socials',
  name: 'socials',
  type: 'object',
  list: true,
  fields: [
    socialName,
    iconUrl,
    socialUrl,
  ],
}

export default socials
