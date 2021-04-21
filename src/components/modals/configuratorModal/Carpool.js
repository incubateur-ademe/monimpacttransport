import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.div`
  margin: -0.5rem 0 0.5rem;
`
const Label = styled.div`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  text-align: center;
`
const Carpoolers = styled.div`
  display: flex;
  margin: 0 -0.25rem;
`
const Carpooler = styled(Emoji)`
  margin: 0 0.25rem;
  font-size: 1.5em;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  cursor: pointer;
`
export default function Carpool() {
  const { carpool, setCarpool } = useContext(TransportationContext)
  return (
    <Wrapper>
      <Label>Covoitureur·se·s</Label>
      <Carpoolers>
        {[1, 2, 3, 4, 5].map((index) => (
          <Carpooler
            key={index}
            index={index}
            onClick={() => setCarpool(index)}
            active={index <= carpool}
          >
            🧑
          </Carpooler>
        ))}
      </Carpoolers>
    </Wrapper>
  )
}
