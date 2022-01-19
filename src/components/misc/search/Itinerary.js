import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Address from './itinerary/Address'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export default function Itinerary() {
  const { start, setStartPlace, end, setEndPlace } = useContext(SearchContext)

  return (
    <Wrapper>
      <Address
        placeholder='Départ'
        address={start?.address}
        setPlace={setStartPlace}
      />
      <Address
        placeholder='Arrivée'
        address={end?.address}
        setPlace={setEndPlace}
      />
    </Wrapper>
  )
}
