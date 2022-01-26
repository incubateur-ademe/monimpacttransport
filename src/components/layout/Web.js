import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import InstallButton from 'components/base/InstallButton'
import HeaderWrapper from 'components/wrappers/HeaderWrapper'
import FooterWrapper from 'components/wrappers/FooterWrapper'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import Learning from 'components/misc/Learning'

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
  width: 47rem;
  max-width: 100%;
  min-height: ${(props) => (props.iframe ? 'none' : '100vh')};
  margin: 0 auto;
  padding: 0 5rem ${(props) => (props.iframe ? 0 : 5)}rem;

  ${(props) => props.theme.mq.small}  {
    padding: 0 0.75rem ${(props) => (props.iframe ? 2 : 5)}rem;
  }
`
export default function Web(props) {
  const iframe = useIframe()
  const [noHeader, setnoHeader] = useState(false)

  useEffect(() => {
    setnoHeader(window.location.search.includes('noheader'))
  }, [])

  return (
    <Wrapper>
      <Content>
        <FullScreen iframe={iframe}>
          <HeaderWrapper noHeader={noHeader} />
          {props.children}
        </FullScreen>
        {!iframe && <Learning />}
        <FooterWrapper iframe={iframe} />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
      <InstallButton />
    </Wrapper>
  )
}
