import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'
import UXContext from 'utils/UXContext'
import StyleContext from 'utils/StyleContext'

import ThemeToggle from 'components/base/ThemeToggle'
import InstallButton from 'components/base/InstallButton'
import Learning from 'components/misc/Learning'
import Configurator from 'components/misc/Configurator'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import FooterWrapper from 'components/wrappers/FooterWrapper'

const Map = React.lazy(() => import('components/misc/Map'))

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 46rem;
  min-height: ${(props) => props.windowHeight}px;
  margin: 0 auto 5rem;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: auto;
  }
`
export default function Web(props) {
  const { height } = useWindowSize()

  const { map } = useContext(UXContext)
  const { theme, accessibility } = useContext(StyleContext)

  return (
    <Wrapper>
      {theme === 'default' && !accessibility && map && (
        <Suspense fallback={''}>
          <Map />
        </Suspense>
      )}
      <ThemeToggle />
      <Configurator />
      <Content>
        <FullScreen windowHeight={height}>{props.children}</FullScreen>
        <Learning />
        <FooterWrapper />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
      <InstallButton />
    </Wrapper>
  )
}
