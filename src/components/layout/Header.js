import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'
import Marianne from 'components/base/Marianne'
import Ademe from 'components/base/Ademe'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
  }
`
const Logos = styled(MagicLink)`
  display: flex;
  align-items: center;
  margin: 0 0.75em 0 -0.75em;
  background-color: #fff;
`
export default function Header(props) {
  return (
    <Wrapper className={props.className}>
      {!props.noHeader && (
        <Logos to='/' aria-label='Accueil'>
          <Marianne />
          <Ademe />
        </Logos>
      )}
      {props.children}
    </Wrapper>
  )
}
