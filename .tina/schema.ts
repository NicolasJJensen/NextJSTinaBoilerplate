import { defineSchema } from "@tinacms/cli"
import seoCollection from "./collections/seo"
import footerCollection from './collections/footer'
import navbarCollection from './collections/navbar'
import homePageCollection from './collections/homePage'

export default defineSchema({
  collections: [
    seoCollection,
    navbarCollection,
    footerCollection,
    homePageCollection,
  ],
})
