import type { AppProps } from 'next/app'
import App from 'next/app'
import dynamic from 'next/dynamic'

import { staticRequest } from 'tinacms'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

import '@/styles/resetStyles.scss'
import '@/styles/globalStyles.scss'

import Layout from '@/components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            // Required: The query from your `getStaticProps` request
            query={pageProps.query}
            // Required: The variables from your `getStaticProps` request
            variables={pageProps.variables} // Variables used in your query
            // Required: The data from your `getStaticProps` request
            data={pageProps.data}
            // clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            // branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            // organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
            isLocalClient={true}
            // formifyCallback={({createForm, formConfig, skip}) => {
            //   console.log(createForm)
            //   console.log(formConfig)
            //   console.log(skip)
            //   return createForm(formConfig)
            // }}
            {...pageProps}
          >
              {(livePageProps: any) => (
                <Layout navbarData={pageProps.navbar} footerData={pageProps.footer}>
                    <Component {...livePageProps} />
                </Layout>
              )}
          </TinaCMS>
        }
      >
        <Layout navbarData={pageProps.navbar} footerData={pageProps.footer} >
          <Component {...pageProps} />
        </Layout>
      </TinaEditProvider>
    </>
  )
}

export default MyApp
