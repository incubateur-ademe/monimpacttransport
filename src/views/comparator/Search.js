import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div`
  position: relative;
  padding: 6vh 0 ${(props) => (props.mode === 'itinerary' ? '2vh' : '6vh')};
  font-size: 2rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 4.9vw;
  }
`
export default function Search() {
  const { mode } = useContext(SearchContext)

  return (
    <Wrapper mode={mode}>
      <ModeSelector />
      {mode === 'itinerary' ? <Itinerary /> : <Distance />}
    </Wrapper>
  )
}
