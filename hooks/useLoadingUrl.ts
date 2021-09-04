import * as React from 'react'
import Router from 'next/router'

export default function useLoadingUrl() {
  const [loadingUrl, setLoadingUrl] = React.useState<string>()

  React.useEffect(() => {
    const start = (url: string) => setLoadingUrl(url)
    const end = (url: string) => setLoadingUrl(url)
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return loadingUrl
}