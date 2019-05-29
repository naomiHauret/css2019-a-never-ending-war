import { SplitRight } from 'mdx-deck/layouts'
import React from "react"
import FullScreenVideo from 'components/FullScreenVideo'
import Footer from 'components/Footer'

const SplitLayout = (props) => {
  const { children, locale } = props

  return <div
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
      <SplitRight>
        {children}
      </SplitRight>
    </div>
    <Footer />
  </div>
}

export default SplitLayout