import { TinaCollection, TinaTemplate } from '@tinacms/cli'

const carouselTemplate: TinaTemplate = {
  label: 'Carousel',
  name: 'carousel',
  fields: [
    {
      label: 'X',
      name: 'x',
      type: 'number'
    },
    {
      label: 'Y',
      name: 'y',
      type: 'number'
    },
    {
      label: 'Images',
      name: 'images',
      type: 'string',
      list: true,
    },
    {
      label: 'Main Text',
      name: 'mainText',
      type: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      label: 'Button',
      name: 'button',
      type: 'object',
      fields: [
        {
          label: 'Text',
          name: 'text',
          type: 'string',
        },
        {
          label: 'URL',
          name: 'url',
          type: 'string',
        },
      ],
    },
    {
      label: 'Delay',
      name: 'delay',
      type: 'number',
    },
  ],
}

const trustIconsTemplate: TinaTemplate = {
  label: 'Trust Icons',
  name: 'trustIcons',
  fields: [
    {
      label: 'Badges',
      name: 'badges',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Icon',
          name: 'icon',
          type: 'string',
        },
        {
          label: 'Text',
          name: 'text',
          type: 'string',
        },
      ],
    },
  ],
}

const singleCollectionPreviewTemplate: TinaTemplate = {
  label: 'Single Collection Preview',
  name: 'singleCollectionPreview',
  fields: [
    {
      label: 'Collection',
      name: 'collection',
      type: 'string',
    },
    {
      label: 'Nº Displayed Products',
      name: 'numImages',
      type: 'number',
    },
  ],
}

const multipleCollectionsPreviewTemplate: TinaTemplate = {
  label: 'Multiple Collections Preview',
  name: 'multipleCollectionsPreview',
  fields: [
    {
      label: 'Title Text',
      name: 'titleText',
      type: 'string',
    },
    {
      label: 'Collections',
      name: 'collections',
      type: 'string',
      list: true,
    },
  ],
}

const SocialMediaIntegrationTemplate: TinaTemplate = {
  label: 'Social Media Integration',
  name: 'socialMediaIntegration',
  fields: [
    {
      label: 'Social Media',
      name: 'socialMedia',
      type: 'string',
      options: ['instagram', 'twitter', 'facebook'],
    },
    {
      label: 'Nº Images To Display',
      name: 'numImages',
      type: 'number',
    },
  ],
}

const testimonialsTemplate: TinaTemplate = {
  label: 'Testimonials',
  name: 'testimonials',
  fields: [
    {
      label: 'Title Text',
      name: 'titleText',
      type: 'string',
    },
    {
      label: 'User Testimonials',
      name: 'userTestimonials',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Quote',
          name: 'quote',
          type: 'string',
        },
        {
          label: 'User',
          name: 'user',
          type: 'string',
        },
        {
          label: 'Website',
          name: 'website',
          type: 'string',
        },
        {
          label: 'Date',
          name: 'date',
          type: 'string',
        },
      ],
    },
  ],
}

const alternatingImageBlocksTemplate: TinaTemplate = {
  label: 'Alternating Image Blocks',
  name: 'alternatingImageBlocks',
  fields: [
    {
      label: 'Image Blocks',
      name: 'imageBlocks',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Image',
          name: 'image',
          type: 'string',
        },
        {
          label: 'Title Text',
          name: 'titleText',
          type: 'string',
        },
        { // TODO: Turn this into a rich text type instead so that there is more control over the formatting
          label: 'Paragraphs',
          name: 'paragraphs',
          type: 'string',
          list: true,
        },
      ],
    },
  ],
}

const homePageCollection: TinaCollection = {
  path: 'content/pages',
  label: 'Home Page',
  name: 'homePage',
  format: 'json',
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'object',
      list: true,
      templates: [
        carouselTemplate,
        trustIconsTemplate,
        singleCollectionPreviewTemplate,
        multipleCollectionsPreviewTemplate,
        SocialMediaIntegrationTemplate,
        testimonialsTemplate,
        alternatingImageBlocksTemplate,
      ],
    },
  ],
}

export default homePageCollection
