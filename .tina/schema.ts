import { defineSchema } from "@tinacms/cli"
import footerCollection from './collections/footer'
import navbarCollection from './collections/navbar'
import homePageCollection from './collections/home'
import seoCollection from "./collections/seo"

export default defineSchema({
  collections: [
    seoCollection,
    navbarCollection,
    homePageCollection,
    footerCollection,
  ],
})
