import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'

import Transportation from './transportationList/Transportation'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  overflow-y: scroll;
`
const Table = styled.table`
  width: 100%;
  font-size: 0.875em;
  border-spacing: 0;
`
export default function TransportationList() {
  const {
    transportations,
    transportationsVisibles,
    transportationsAlwaysVisibles,
    toggleAlwaysVisible,
    toggleVisible,
  } = useContext(TransportationContext)

  return (
    <Wrapper>
      <Table>
        <tbody>
          {transportations.map((transportation) => (
            <Transportation
              key={transportation.id}
              transportation={transportation}
              transportationsVisibles={transportationsVisibles}
              toggleVisible={toggleVisible}
              transportationsAlwaysVisibles={transportationsAlwaysVisibles}
              toggleAlwaysVisible={toggleAlwaysVisible}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}
