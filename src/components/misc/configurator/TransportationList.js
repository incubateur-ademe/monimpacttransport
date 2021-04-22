import React, { useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import UXContext from 'utils/UXContext'
import Transportation from './transportationList/Transportation'

const Wrapper = styled.div`
  position: relative;
  margin: 0 ${(props) => (props.modal ? '-2rem' : 0)} 1rem;
  overflow-y: scroll;
`
const Table = styled.table`
  width: 100%;
  font-size: 0.875em;
  border-spacing: 0;
`
export default function TransportationList(props) {
  const {
    transportations,
    transportationsVisibles,
    transportationsAlwaysVisibles,
    toggleAlwaysVisible,
    toggleVisible,
  } = useContext(TransportationContext)

  const ref = useRef(null)
  const { configuratorOpen } = useContext(UXContext)

  useEffect(() => {
    console.log('scroll')
    ref.current.scrollIntoView()
  }, [configuratorOpen])
  return (
    <Wrapper modal={props.modal}>
      <Table ref={ref}>
        <tbody>
          {transportations.map((transportation) => (
            <Transportation
              id={transportation.id}
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
