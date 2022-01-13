import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.375rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.main : 'transparent'};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 200ms ease-out;
`
export default function Transportation(props) {
  const { teletravailTransportation, setTeletravailTransportation } =
    useContext(SearchContext)

  return (
    <Wrapper
      onClick={() => setTeletravailTransportation(props.transportation.id)}
      active={teletravailTransportation === props.transportation.id}
    >
      {props.transportation.emoji.main}
    </Wrapper>
  )
}
