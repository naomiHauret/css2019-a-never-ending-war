import React, { useState } from "react"
import FullScreenVideo from 'components/FullScreenVideo'
import Footer from 'components/Footer'

const Layout = (props) => {
  const { children, locale, video } = props

  return <div
    style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <FullScreenVideo name={video} />
    <div style={{
      position: 'relative',
      zIndex: 1,
    }}>
      {children}
    </div>
    <Footer />
  </div>
}

Layout.defaultProps = {
  video: "empty",
}

export default Layout