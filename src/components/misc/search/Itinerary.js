import React from 'react'
import styled from 'styled-components'

import Address from './itinerary/Address'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
const Start = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 0.5rem;
  }
`
const End = styled.div`
  margin-left: 15rem;

  ${(props) => props.theme.mq.small} {
    align-self: flex-end;
    margin: 0;
  }
`
export default function Itinerary() {
  return (
    <Wrapper>
      <Start>Quand je vais</Start>
      <Address type='from' />
      <Address type='to' />
      <End>j'émets</End>
    </Wrapper>
  )
}
