import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import '@/styles/resetStyles.scss'
import '@/styles/globalStyles.scss'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AnimateSharedLayout>
      <Head>
      </Head>

      <Navbar />

      {/* Allows Pages to Animate When Un-mounting */}
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
  </AnimateSharedLayout>
  )
}

export default MyApp
