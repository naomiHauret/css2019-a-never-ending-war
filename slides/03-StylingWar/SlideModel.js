import React from 'react'
import Layout from 'components/Layout'
import Translate from 'components/Translate'
import Container from 'components/Container'
import { Appear } from '@mdx-deck/components'

const SlideModel = (props) => {
  const { titleKey, reasonKey, examples } = props

  return <Layout>
    <Container>
      <Appear>
        <div>
          <div style={{
            fontSize: '1.45rem', textShadow: "blue 0px 0 0.5em",
}}>
            <Translate id="stylingWar.oneDaySomeGuySaid" />
          </div>
          <blockquote style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            textShadow: 'blue 0px 4px 0, black 0px 8px 0, darkcyan 1px 0px 6px'
          }}>
            <Translate id={`stylingWar.${reasonKey}`}/>
          </blockquote>
        </div>
        <div style={{ fontSize: '1.45rem', marginBottom: "40px" }}>
          <Translate id="stylingWar.anotherGuyCreated" />
        </div>
        <div>
          <div style={{
            textTransform: 'uppercase',
            fontWeight: '900',
            fontSize: "6rem",
            textShadow: "cyan 0px 0 0.095em, blue 0px 0 0.5em",
            letterSpacing: '0.075em',
            fontFamily: 'Montserrat',}}>
            <Translate id={`stylingWar.${titleKey}`} />
          </div>
          {examples && <ul style={{
            fontSize: "1.5rem",
            textAlign: "center",
            listStyle: "none",
          }}>
            {examples.map((example, i) => <li key={i}>
              {example}
              </li>)}
          </ul>}
        </div>
      </Appear>
    </Container>
  </Layout>
}

export default SlideModel