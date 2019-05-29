import React, { useState } from "react"
import { Translation as TranslationContext } from "store/Translation"

const TranslationProvider = (props) => {
  const { children, locale } = props
  const [translation, setLocale] = useState({ locale: props.locale, fallback: "fr" })

  return <TranslationContext.Provider value={translation}>
    {children}
  </TranslationContext.Provider>
}

export default TranslationProvider