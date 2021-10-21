import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div``
export default function Search() {
  const { mode } = useContext(SearchContext)

  return (
    <Wrapper>
      <ModeSelector />
      {mode === 'itinerary' ? <Itinerary /> : <Distance />}
    </Wrapper>
  )
}
