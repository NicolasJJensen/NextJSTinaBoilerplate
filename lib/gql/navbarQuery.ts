const navbarQuery = `
getNavbarDocument(relativePath: "navbar.json") {
  data {
    ...NavbarParts
  }
}
`

export default navbarQuery
