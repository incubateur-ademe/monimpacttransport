import React from 'react'
import styled from 'styled-components'

import GeoInput from './itinerary/GeoInput'
import Select from './Select'

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
  margin-bottom: 0.875em;
`
const Selectable = styled.div`
  position: relative;
  margin: 0 0.5em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.main};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.main};
  }

  &:after {
    content: 'ˇ';
    position: absolute;
    top: calc(100% - 3px);
    right: 0.1em;
    font-size: 1.875rem;
    font-weight: 800;
    pointer-events: none;
  }
`
const End = styled.div`
  margin-left: 7em;
`
export default function Itinerary() {
  return (
    <Wrapper>
      <Start>
        Quand je <Selectable>vais</Selectable>
        <Select />
      </Start>
      <GeoInput from />
      <GeoInput to />
      <End>j'émets</End>
    </Wrapper>
  )
}
