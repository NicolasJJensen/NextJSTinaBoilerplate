const navbarQuery = `
getSeoDocument(relativePath: $relativePath) {
  data {
    ...SeoParts
  }
}
`

export default navbarQuery
