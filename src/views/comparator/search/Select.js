import React, { useContext } from 'react'
import styled from 'styled-components'

import SuggestionContext from 'utils/SuggestionContext'
import SearchContext from 'utils/SearchContext'

const Wrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 0.3em);
  opacity: 0;
  cursor: pointer;
`
const Option = styled.option`
  font-size: 0.5rem;
`
export default function Select() {
  const { suggestions } = useContext(SuggestionContext)
  const { mode, setMode } = useContext(SearchContext)

  return (
    <Wrapper value={mode} onChange={(e) => setMode(e.target.value)}>
      <Option value='distance'>parcours .... km</Option>
      <Option value='itinerary'>vais de ...... à ......</Option>
      {suggestions.map((suggestion) => (
        <Option value={suggestion.id}>{suggestion.label.fr}</Option>
      ))}
    </Wrapper>
  )
}
