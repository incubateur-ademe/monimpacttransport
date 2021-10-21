import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div``
const Tab = styled(MagicLink)``
export default function ModeSelector(props) {
  return (
    <Wrapper>
      <Tab to='/'>Distance</Tab>
      <Tab to='/itinerary'>Itinéraire</Tab>
    </Wrapper>
  )
}
