import { defineSchema } from "@tinacms/cli"
import footerCollection from './collections/footer'
import navbarCollection from './collections/navbar'
import homePageCollection from './collections/home'

export default defineSchema({
  collections: [
    navbarCollection,
    homePageCollection,
    footerCollection,
  ],
})
