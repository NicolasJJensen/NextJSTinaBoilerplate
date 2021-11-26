import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Layout({ children, navbarData, footerData, seoData }: { children: React.ReactNode } & any) {

  return (
    <>
      <Head>
        <title>{seoData?.title}</title>
        <meta name='description' content={seoData?.description}></meta>
      </Head>
      <Navbar {...navbarData} />

      {/* Allows Pages to Animate When Un-mounting */}
      <AnimateSharedLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </AnimateSharedLayout>

      <Footer {...footerData} />
    </>
  )
}

export default Layout
