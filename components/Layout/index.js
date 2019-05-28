import React, { useState } from "react"
import FullScreenVideo from 'components/FullScreenVideo'
import { Translation as TranslationContext } from "store/Translation"
import Footer from 'components/Footer'

const Layout = (props) => {
  const { children, locale } = props
  const [translation, setLocale] = useState({ locale: props.locale, fallback: "fr" })

  return <TranslationContext.Provider value={translation}>
  <div
    style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <FullScreenVideo name="empty" />
    <div style={{
      position: 'relative',
      zIndex: 1,
    }}>
      {children}
    </div>
    <Footer />
  </div>
  </TranslationContext.Provider>
  }

  export default Layout