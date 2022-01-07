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
  const { setStart, setEnd } = useContext(SearchContext)

  return (
    <Wrapper>
      <Address placeholder='Départ' setCoordinates={setStart} />
      <Address placeholder='Arrivée' setCoordinates={setEnd} />
    </Wrapper>
  )
}
