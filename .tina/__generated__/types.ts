//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getNavbarDocument: NavbarDocument;
  getNavbarList: NavbarConnection;
  getHomePageContentDocument: HomePageContentDocument;
  getHomePageContentList: HomePageContentConnection;
  getFooterDocument: FooterDocument;
  getFooterList: FooterConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetNavbarDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetNavbarListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetHomePageContentDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetHomePageContentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFooterDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetFooterListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label: Scalars['String'];
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentNode = NavbarDocument | HomePageContentDocument | FooterDocument;

export type NavbarNavbarLinks = {
  __typename?: 'NavbarNavbarLinks';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Navbar = {
  __typename?: 'Navbar';
  navbarLinks?: Maybe<Array<Maybe<NavbarNavbarLinks>>>;
};

export type NavbarDocument = Node & Document & {
  __typename?: 'NavbarDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Navbar;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type NavbarConnectionEdges = {
  __typename?: 'NavbarConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<NavbarDocument>;
};

export type NavbarConnection = Connection & {
  __typename?: 'NavbarConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<NavbarConnectionEdges>>>;
};

export type HomePageContentSectionsCarouselButton = {
  __typename?: 'HomePageContentSectionsCarouselButton';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type HomePageContentSectionsCarousel = {
  __typename?: 'HomePageContentSectionsCarousel';
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mainText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  button?: Maybe<HomePageContentSectionsCarouselButton>;
  delay?: Maybe<Scalars['Int']>;
};

export type HomePageContentSectionsGuaranteesBadges = {
  __typename?: 'HomePageContentSectionsGuaranteesBadges';
  icon?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type HomePageContentSectionsGuarantees = {
  __typename?: 'HomePageContentSectionsGuarantees';
  badges?: Maybe<Array<Maybe<HomePageContentSectionsGuaranteesBadges>>>;
};

export type HomePageContentSectionsCollectionList = {
  __typename?: 'HomePageContentSectionsCollectionList';
  collection?: Maybe<Scalars['String']>;
  numImages?: Maybe<Scalars['Int']>;
  numColumns?: Maybe<Scalars['Int']>;
  numRows?: Maybe<Scalars['Int']>;
};

export type HomePageContentSectionsCollectionListDisplay = {
  __typename?: 'HomePageContentSectionsCollectionListDisplay';
  titleText?: Maybe<Scalars['String']>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HomePageContentSectionsSocialMediaIntegration = {
  __typename?: 'HomePageContentSectionsSocialMediaIntegration';
  socialMedia?: Maybe<Scalars['String']>;
  numImages?: Maybe<Scalars['Int']>;
  numColumns?: Maybe<Scalars['Int']>;
  numRows?: Maybe<Scalars['Int']>;
};

export type HomePageContentSections = HomePageContentSectionsCarousel | HomePageContentSectionsGuarantees | HomePageContentSectionsCollectionList | HomePageContentSectionsCollectionListDisplay | HomePageContentSectionsSocialMediaIntegration;

export type HomePageContent = {
  __typename?: 'HomePageContent';
  sections?: Maybe<Array<Maybe<HomePageContentSections>>>;
};

export type HomePageContentDocument = Node & Document & {
  __typename?: 'HomePageContentDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: HomePageContent;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type HomePageContentConnectionEdges = {
  __typename?: 'HomePageContentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<HomePageContentDocument>;
};

export type HomePageContentConnection = Connection & {
  __typename?: 'HomePageContentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<HomePageContentConnectionEdges>>>;
};

export type FooterNavSectionsLinks = {
  __typename?: 'FooterNavSectionsLinks';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FooterNavSections = {
  __typename?: 'FooterNavSections';
  links?: Maybe<Array<Maybe<FooterNavSectionsLinks>>>;
  title?: Maybe<Scalars['String']>;
};

export type Footer = {
  __typename?: 'Footer';
  navSections?: Maybe<Array<Maybe<FooterNavSections>>>;
};

export type FooterDocument = Node & Document & {
  __typename?: 'FooterDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Footer;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type FooterConnectionEdges = {
  __typename?: 'FooterConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<FooterDocument>;
};

export type FooterConnection = Connection & {
  __typename?: 'FooterConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<FooterConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateNavbarDocument: NavbarDocument;
  createNavbarDocument: NavbarDocument;
  updateHomePageContentDocument: HomePageContentDocument;
  createHomePageContentDocument: HomePageContentDocument;
  updateFooterDocument: FooterDocument;
  createFooterDocument: FooterDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateNavbarDocumentArgs = {
  relativePath: Scalars['String'];
  params: NavbarMutation;
};


export type MutationCreateNavbarDocumentArgs = {
  relativePath: Scalars['String'];
  params: NavbarMutation;
};


export type MutationUpdateHomePageContentDocumentArgs = {
  relativePath: Scalars['String'];
  params: HomePageContentMutation;
};


export type MutationCreateHomePageContentDocumentArgs = {
  relativePath: Scalars['String'];
  params: HomePageContentMutation;
};


export type MutationUpdateFooterDocumentArgs = {
  relativePath: Scalars['String'];
  params: FooterMutation;
};


export type MutationCreateFooterDocumentArgs = {
  relativePath: Scalars['String'];
  params: FooterMutation;
};

export type DocumentMutation = {
  navbar?: InputMaybe<NavbarMutation>;
  homePageContent?: InputMaybe<HomePageContentMutation>;
  footer?: InputMaybe<FooterMutation>;
};

export type NavbarNavbarLinksMutation = {
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type NavbarMutation = {
  navbarLinks?: InputMaybe<Array<InputMaybe<NavbarNavbarLinksMutation>>>;
};

export type HomePageContentSectionsCarouselButtonMutation = {
  text?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type HomePageContentSectionsCarouselMutation = {
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainText?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  button?: InputMaybe<HomePageContentSectionsCarouselButtonMutation>;
  delay?: InputMaybe<Scalars['Int']>;
};

export type HomePageContentSectionsGuaranteesBadgesMutation = {
  icon?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type HomePageContentSectionsGuaranteesMutation = {
  badges?: InputMaybe<Array<InputMaybe<HomePageContentSectionsGuaranteesBadgesMutation>>>;
};

export type HomePageContentSectionsCollectionListMutation = {
  collection?: InputMaybe<Scalars['String']>;
  numImages?: InputMaybe<Scalars['Int']>;
  numColumns?: InputMaybe<Scalars['Int']>;
  numRows?: InputMaybe<Scalars['Int']>;
};

export type HomePageContentSectionsCollectionListDisplayMutation = {
  titleText?: InputMaybe<Scalars['String']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageContentSectionsSocialMediaIntegrationMutation = {
  socialMedia?: InputMaybe<Scalars['String']>;
  numImages?: InputMaybe<Scalars['Int']>;
  numColumns?: InputMaybe<Scalars['Int']>;
  numRows?: InputMaybe<Scalars['Int']>;
};

export type HomePageContentSectionsMutation = {
  carousel?: InputMaybe<HomePageContentSectionsCarouselMutation>;
  guarantees?: InputMaybe<HomePageContentSectionsGuaranteesMutation>;
  collectionList?: InputMaybe<HomePageContentSectionsCollectionListMutation>;
  collectionListDisplay?: InputMaybe<HomePageContentSectionsCollectionListDisplayMutation>;
  socialMediaIntegration?: InputMaybe<HomePageContentSectionsSocialMediaIntegrationMutation>;
};

export type HomePageContentMutation = {
  sections?: InputMaybe<Array<InputMaybe<HomePageContentSectionsMutation>>>;
};

export type FooterNavSectionsLinksMutation = {
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FooterNavSectionsMutation = {
  links?: InputMaybe<Array<InputMaybe<FooterNavSectionsLinksMutation>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type FooterMutation = {
  navSections?: InputMaybe<Array<InputMaybe<FooterNavSectionsMutation>>>;
};

export type NavbarPartsFragment = { __typename?: 'Navbar', navbarLinks?: Array<{ __typename: 'NavbarNavbarLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined };

export type HomePageContentPartsFragment = { __typename?: 'HomePageContent', sections?: Array<{ __typename: 'HomePageContentSectionsCarousel', images?: Array<string | null | undefined> | null | undefined, mainText?: string | null | undefined, description?: string | null | undefined, delay?: number | null | undefined, button?: { __typename: 'HomePageContentSectionsCarouselButton', text?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'HomePageContentSectionsGuarantees', badges?: Array<{ __typename: 'HomePageContentSectionsGuaranteesBadges', icon?: string | null | undefined, text?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsCollectionList', collection?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | { __typename: 'HomePageContentSectionsCollectionListDisplay', titleText?: string | null | undefined, collections?: Array<string | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsSocialMediaIntegration', socialMedia?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | null | undefined> | null | undefined };

export type FooterPartsFragment = { __typename?: 'Footer', navSections?: Array<{ __typename: 'FooterNavSections', title?: string | null | undefined, links?: Array<{ __typename: 'FooterNavSectionsLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type GetNavbarDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetNavbarDocumentQuery = { __typename?: 'Query', getNavbarDocument: { __typename?: 'NavbarDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Navbar', navbarLinks?: Array<{ __typename: 'NavbarNavbarLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } } };

export type GetNavbarListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavbarListQuery = { __typename?: 'Query', getNavbarList: { __typename?: 'NavbarConnection', totalCount: number, edges?: Array<{ __typename?: 'NavbarConnectionEdges', node?: { __typename?: 'NavbarDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Navbar', navbarLinks?: Array<{ __typename: 'NavbarNavbarLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetHomePageContentDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetHomePageContentDocumentQuery = { __typename?: 'Query', getHomePageContentDocument: { __typename?: 'HomePageContentDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'HomePageContent', sections?: Array<{ __typename: 'HomePageContentSectionsCarousel', images?: Array<string | null | undefined> | null | undefined, mainText?: string | null | undefined, description?: string | null | undefined, delay?: number | null | undefined, button?: { __typename: 'HomePageContentSectionsCarouselButton', text?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'HomePageContentSectionsGuarantees', badges?: Array<{ __typename: 'HomePageContentSectionsGuaranteesBadges', icon?: string | null | undefined, text?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsCollectionList', collection?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | { __typename: 'HomePageContentSectionsCollectionListDisplay', titleText?: string | null | undefined, collections?: Array<string | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsSocialMediaIntegration', socialMedia?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | null | undefined> | null | undefined } } };

export type GetHomePageContentListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageContentListQuery = { __typename?: 'Query', getHomePageContentList: { __typename?: 'HomePageContentConnection', totalCount: number, edges?: Array<{ __typename?: 'HomePageContentConnectionEdges', node?: { __typename?: 'HomePageContentDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'HomePageContent', sections?: Array<{ __typename: 'HomePageContentSectionsCarousel', images?: Array<string | null | undefined> | null | undefined, mainText?: string | null | undefined, description?: string | null | undefined, delay?: number | null | undefined, button?: { __typename: 'HomePageContentSectionsCarouselButton', text?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'HomePageContentSectionsGuarantees', badges?: Array<{ __typename: 'HomePageContentSectionsGuaranteesBadges', icon?: string | null | undefined, text?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsCollectionList', collection?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | { __typename: 'HomePageContentSectionsCollectionListDisplay', titleText?: string | null | undefined, collections?: Array<string | null | undefined> | null | undefined } | { __typename: 'HomePageContentSectionsSocialMediaIntegration', socialMedia?: string | null | undefined, numImages?: number | null | undefined, numColumns?: number | null | undefined, numRows?: number | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetFooterDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetFooterDocumentQuery = { __typename?: 'Query', getFooterDocument: { __typename?: 'FooterDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Footer', navSections?: Array<{ __typename: 'FooterNavSections', title?: string | null | undefined, links?: Array<{ __typename: 'FooterNavSectionsLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } };

export type GetFooterListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterListQuery = { __typename?: 'Query', getFooterList: { __typename?: 'FooterConnection', totalCount: number, edges?: Array<{ __typename?: 'FooterConnectionEdges', node?: { __typename?: 'FooterDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Footer', navSections?: Array<{ __typename: 'FooterNavSections', title?: string | null | undefined, links?: Array<{ __typename: 'FooterNavSectionsLinks', label?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const NavbarPartsFragmentDoc = gql`
    fragment NavbarParts on Navbar {
  navbarLinks {
    __typename
    label
    url
  }
}
    `;
export const HomePageContentPartsFragmentDoc = gql`
    fragment HomePageContentParts on HomePageContent {
  sections {
    __typename
    ... on HomePageContentSectionsCarousel {
      images
      mainText
      description
      button {
        __typename
        text
        url
      }
      delay
    }
    ... on HomePageContentSectionsGuarantees {
      badges {
        __typename
        icon
        text
      }
    }
    ... on HomePageContentSectionsCollectionList {
      collection
      numImages
      numColumns
      numRows
    }
    ... on HomePageContentSectionsCollectionListDisplay {
      titleText
      collections
    }
    ... on HomePageContentSectionsSocialMediaIntegration {
      socialMedia
      numImages
      numColumns
      numRows
    }
  }
}
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  navSections {
    __typename
    links {
      __typename
      label
      url
    }
    title
  }
}
    `;
export const GetNavbarDocumentDocument = gql`
    query getNavbarDocument($relativePath: String!) {
  getNavbarDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...NavbarParts
    }
  }
}
    ${NavbarPartsFragmentDoc}`;
export const GetNavbarListDocument = gql`
    query getNavbarList {
  getNavbarList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...NavbarParts
        }
      }
    }
  }
}
    ${NavbarPartsFragmentDoc}`;
export const GetHomePageContentDocumentDocument = gql`
    query getHomePageContentDocument($relativePath: String!) {
  getHomePageContentDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...HomePageContentParts
    }
  }
}
    ${HomePageContentPartsFragmentDoc}`;
export const GetHomePageContentListDocument = gql`
    query getHomePageContentList {
  getHomePageContentList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...HomePageContentParts
        }
      }
    }
  }
}
    ${HomePageContentPartsFragmentDoc}`;
export const GetFooterDocumentDocument = gql`
    query getFooterDocument($relativePath: String!) {
  getFooterDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...FooterParts
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export const GetFooterListDocument = gql`
    query getFooterList {
  getFooterList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...FooterParts
        }
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getNavbarDocument(variables: GetNavbarDocumentQueryVariables, options?: C): Promise<{data: GetNavbarDocumentQuery, variables: GetNavbarDocumentQueryVariables, query: string}> {
        return requester<{data: GetNavbarDocumentQuery, variables: GetNavbarDocumentQueryVariables, query: string}, GetNavbarDocumentQueryVariables>(GetNavbarDocumentDocument, variables, options);
      },
    getNavbarList(variables?: GetNavbarListQueryVariables, options?: C): Promise<{data: GetNavbarListQuery, variables: GetNavbarListQueryVariables, query: string}> {
        return requester<{data: GetNavbarListQuery, variables: GetNavbarListQueryVariables, query: string}, GetNavbarListQueryVariables>(GetNavbarListDocument, variables, options);
      },
    getHomePageContentDocument(variables: GetHomePageContentDocumentQueryVariables, options?: C): Promise<{data: GetHomePageContentDocumentQuery, variables: GetHomePageContentDocumentQueryVariables, query: string}> {
        return requester<{data: GetHomePageContentDocumentQuery, variables: GetHomePageContentDocumentQueryVariables, query: string}, GetHomePageContentDocumentQueryVariables>(GetHomePageContentDocumentDocument, variables, options);
      },
    getHomePageContentList(variables?: GetHomePageContentListQueryVariables, options?: C): Promise<{data: GetHomePageContentListQuery, variables: GetHomePageContentListQueryVariables, query: string}> {
        return requester<{data: GetHomePageContentListQuery, variables: GetHomePageContentListQueryVariables, query: string}, GetHomePageContentListQueryVariables>(GetHomePageContentListDocument, variables, options);
      },
    getFooterDocument(variables: GetFooterDocumentQueryVariables, options?: C): Promise<{data: GetFooterDocumentQuery, variables: GetFooterDocumentQueryVariables, query: string}> {
        return requester<{data: GetFooterDocumentQuery, variables: GetFooterDocumentQueryVariables, query: string}, GetFooterDocumentQueryVariables>(GetFooterDocumentDocument, variables, options);
      },
    getFooterList(variables?: GetFooterListQueryVariables, options?: C): Promise<{data: GetFooterListQuery, variables: GetFooterListQueryVariables, query: string}> {
        return requester<{data: GetFooterListQuery, variables: GetFooterListQueryVariables, query: string}, GetFooterListQueryVariables>(GetFooterListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { getStaticPropsForTina } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  // const data = await tinaClient.request(doc, { variables: vars }); 
  const res = await await getStaticPropsForTina({query: doc, variables: vars})
  return res
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)
