import React from 'react'
import styled from 'styled-components'

import Header from 'components/layout/Header'

const StyledHeader = styled(Header)`
  margin-bottom: 2rem;
`
export default function HeaderWrapper() {
  return <StyledHeader />
}
