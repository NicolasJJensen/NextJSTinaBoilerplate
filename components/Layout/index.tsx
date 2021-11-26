import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Layout({ children, ...props }: { children: React.ReactNode } & any) {

  return (
    <>
      <Navbar {...props.navbarData} />

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

      <Footer {...props.footerData} />
    </>
  )
}

export default Layout
