import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div`
  position: relative;
  padding: ${(props) => (props.iframe ? '3rem' : '6vh')} 0
    ${(props) =>
      props.iframe ? '3rem' : props.mode === 'itinerary' ? '2vh' : '6vh'};
  font-size: 2rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 4.16vw;
  }
`
export default function Search(props) {
  const { mode } = useContext(SearchContext)

  return (
    <Wrapper mode={mode} iframe={props.iframe}>
      <ModeSelector />
      {mode === 'itinerary' ? <Itinerary /> : <Distance />}
    </Wrapper>
  )
}
