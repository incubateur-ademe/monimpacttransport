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
const Details = styled.button`
  margin: 0 auto;
  padding: 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`
export default function Teletravail() {
  const { start, end, teletravailTransportation, setStart, setEnd } =
    useContext(SearchContext)

  return (
    <Wrapper>
      <Address placeholder='Domicile' setCoordinates={setStart} />
      <Address placeholder='Travail' setCoordinates={setEnd} />
      <Transportations />
      <Days />
      {start && end && teletravailTransportation && (
        <Details>Voir / ajuster les détails du calcul</Details>
      )}
    </Wrapper>
  )
}
