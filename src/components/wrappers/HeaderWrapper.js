import React from 'react'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import Logo from 'components/misc/Logo'

const StyledHeader = styled(Header)`
  margin-bottom: 1.5rem;
`
export default function HeaderWrapper() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}
