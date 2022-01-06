import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  position: absolute;
  z-index: 12;
  top: 100%;
  right: 0;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.footer};
  border-radius: 1rem 0 1rem 1rem;
`
const Item = styled(MagicLink)`
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`
export default function Menu() {
  return (
    <Wrapper>
      <Item to='/teletravail'>Télétravail</Item>
      <Item to='/about'>À propos</Item>
    </Wrapper>
  )
}
