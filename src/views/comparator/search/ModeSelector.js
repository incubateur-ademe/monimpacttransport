import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div``
const Tab = styled.button``
export default function ModeSelector(props) {
  const { mode, setMode } = useContext(SearchContext)

  return (
    <Wrapper>
      <Tab
        onClick={() => {
          setMode('distance')
        }}
        current={mode === 'distance'}
      >
        Distance
      </Tab>
      <Tab
        onClick={() => {
          setMode('itinerary')
        }}
        current={mode === 'distance'}
      >
        Itinéraire
      </Tab>
    </Wrapper>
  )
}
