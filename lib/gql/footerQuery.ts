const footerQuery = `
getFooterDocument(relativePath: "footer.json") {
  data {
    ...FooterParts
  }
}
`

export default footerQuery
