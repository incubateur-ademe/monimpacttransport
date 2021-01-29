import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'
import UXContext from 'utils/UXContext'

import Header from 'components/layout/Header'
import Footer from '@bit/datagir.simulateurs.footer'
import Embed from 'components/misc/Embed'
const Map = React.lazy(() => import('components/layout/Map'))

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 60em;
  min-height: ${(props) => props.windowHeight}px;
  margin: 0 auto 2em;
  padding-bottom: 5vw;

  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 3vw 2em;
    padding-bottom: 5vw;
  }
`
export default function Web(props) {
  const { height } = useWindowSize()

  const { setConfiguratorOpen } = useContext(UXContext)

  return (
    <Wrapper>
      <Suspense fallback={''}>
        <Map />
      </Suspense>
      <Content>
        <FullScreen windowHeight={height}>
          <Header />
          {props.children}
        </FullScreen>
        <Footer setConfiguratorOpen={setConfiguratorOpen} sources={[]} />
      </Content>
      <Embed />
    </Wrapper>
  )
}
