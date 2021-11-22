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
      name: 'x',
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

const guaranteesTemplate: TinaTemplate = {
  label: 'Guarantees',
  name: 'guarantees',
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

const collectionDisplayTemplate: TinaTemplate = {
  label: 'Collection List',
  name: 'collectionList',
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
    {
      label: 'Nº Columns',
      name: 'numColumns',
      type: 'number',
    },
    {
      label: 'Nº Rows',
      name: 'numRows',
      type: 'number',
    },
  ],
}

const CollectionListDisplayTemplate: TinaTemplate = {
  label: 'Collection List Display',
  name: 'collectionListDisplay',
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
    {
      label: 'Nº Columns',
      name: 'numColumns',
      type: 'number',
    },
    {
      label: 'Nº Rows',
      name: 'numRows',
      type: 'number',
    },
  ],
}

const homePageCollection: TinaCollection = {
  path: 'content/pages',
  label: 'Home Page Content',
  name: 'homePageContent',
  format: 'json',
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'object',
      list: true,
      templates: [
        carouselTemplate,
        guaranteesTemplate,
        collectionDisplayTemplate,
        CollectionListDisplayTemplate,
        SocialMediaIntegrationTemplate,
      ],
    },
  ],
}

export default homePageCollection

// EXAMPLE QUERY

// query {
//   getHomePageContentDocument(relativePath: "home.json") {
//     data {
//       sections {
//         __typename
//         ... on HomePageContentSectionsCarousel {
//           images,
//           mainText,
//           description,
//           button {
//             text,
//             url
//           }
//         }
//         ... on HomePageContentSectionsGuarantees {
//           badges {
//             icon,
//             text
//           }
//         }
//         ... on HomePageContentSectionsCollectionList {
//           collection,
//           numImages,
//           numColumns,
//           numRows
//         }
//         ... on HomePageContentSectionsCollectionListDisplay {
//           titleText,
//           collections
//         }
//         ... on HomePageContentSectionsSocialMediaIntegration {
//           socialMedia,
//           numImages,
//           numColumns,
//           numRows
//         }
//       }
//     }
//   }
// }
