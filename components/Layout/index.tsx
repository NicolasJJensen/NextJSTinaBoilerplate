import Head from 'next/head'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Layout({ data, children }: { data?: any, children: React.ReactNode }) {
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
        {children}
      </AnimatePresence>

      <Footer />
    </AnimateSharedLayout>
  )
}

export default Layout
