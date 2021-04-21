import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import StyleContext from 'utils/StyleContext'
import Configurator from 'components/misc/Configurator'
import IframeFooter from 'components/layout/IframeFooter'

const Map = React.lazy(() => import('components/misc/Map'))

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  width: 46rem;
  margin: 0 auto;
  padding: 0.5rem 0.5rem 2rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
export default function Iframe(props) {
  const { map } = useContext(UXContext)
  const { theme } = useContext(StyleContext)
  return (
    <Wrapper>
      {theme === 'default' && map && (
        <Suspense fallback={''}>
          <Map />
        </Suspense>
      )}
      <Configurator />
      <Content>
        <FullScreen>{props.children}</FullScreen>
        <IframeFooter about={process.env.REACT_APP_URL} />
      </Content>
    </Wrapper>
  )
}
