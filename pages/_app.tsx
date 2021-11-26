import type { AppProps } from 'next/app'
import App from 'next/app'
import dynamic from 'next/dynamic'

import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

import { mapDataForProps } from '@/lib/gql/createFullQuery'

import '@/styles/resetStyles.scss'
import '@/styles/globalStyles.scss'

import Layout from '@/components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { navbarData, footerData, seoData, ...props } = mapDataForProps(pageProps.data)

  return (
    <>
      <TinaEditProvider
        showEditButton={true}
        editMode={
          <TinaCMS
            // Required: The query used in the pages' `getStaticProps` request
            // query={query}
            // Required: The variables used in the pages' `getStaticProps` request
            // variables={variables}
            // Required: The data used in the pages' `getStaticProps` request
            // data={data}
            // True because we are currently developing the website locally
            // TODO: Change to use ENV variable that checks environment (won't be true in production)
            isLocalClient={true}
            {...pageProps}
          >
              {(livePageProps: any) => {
                const { navbarData, footerData, seoData, ...props } = mapDataForProps(livePageProps.data)
                return (
                  <Layout {...{navbarData, footerData, seoData}}>
                    <Component {...props} />
                  </Layout>
                )
              }}
          </TinaCMS>
        }
      >
        <Layout {...{navbarData, footerData, seoData}} >
          <Component {...props} />
        </Layout>
      </TinaEditProvider>
    </>
  )
}

export default MyApp
