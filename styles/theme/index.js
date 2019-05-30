import TranslationProvider from 'store/Translation/Provider'

export default {
  css: {
    lineHeight: '1.4'
  },

  // add a custom font
  font: 'Roboto-mono, mono',

  // custom colors
  colors: {
    text: '#ffffff',
    background: 'black',
  },
  pre: {
    fontSize: '1rem',
  },
  // Elements
  heading: {
    margin: 0,
  },

  h1: {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: "120px",
    textShadow: "cyan 0px 0 0.095em, blue 0px 0 0.5em",
    letterSpacing: '0.075em',
    fontFamily: 'Montserrat, sans-serif',
  },
  Provider: TranslationProvider,
}