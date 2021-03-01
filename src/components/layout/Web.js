import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'
import UXContext from 'utils/UXContext'
import StyleContext from 'utils/StyleContext'

import Header from 'components/layout/Header'
import Footer from 'components/base/Footer'
import Embed from 'components/misc/Embed'
import Learning from 'components/layout/Learning'

const Map = React.lazy(() => import('components/layout/Map'))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${(props) => props.theme.mq.large} {
    flex-direction: row;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 62rem;
  min-height: ${(props) => props.windowHeight}px;
  margin: 0 auto 5rem;
  padding: 0 0.5rem 2rem;
`
export default function Web(props) {
  const { height } = useWindowSize()

  const { setConfiguratorOpen } = useContext(UXContext)
  const { theme } = useContext(StyleContext)

  return (
    <Wrapper>
      {theme === 'default' && (
        <Suspense fallback={''}>
          <Map />
        </Suspense>
      )}
      <Content>
        <FullScreen windowHeight={height}>
          <Header />
          {props.children}
        </FullScreen>
        <Learning />
        <Footer
          width={'45rem'}
          setConfiguratorOpen={setConfiguratorOpen}
          sources={[
            {
              label: 'Base carbone®',
              href: 'https://data.ademe.fr/datasets/base-carbone(r)',
            },
          ]}
        />
      </Content>
      <Embed />
    </Wrapper>
  )
}
