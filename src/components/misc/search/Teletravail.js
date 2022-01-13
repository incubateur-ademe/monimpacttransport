import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Address from './itinerary/Address'
import Transportations from './teletravail/Transportations'
import Days from './teletravail/Days'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export default function Teletravail() {
  const { setStart, setEnd } = useContext(SearchContext)

  return (
    <Wrapper>
      <Address placeholder='Domicile' setCoordinates={setStart} />
      <Address placeholder='Travail' setCoordinates={setEnd} />
      <Transportations />
      <Days />
    </Wrapper>
  )
}
