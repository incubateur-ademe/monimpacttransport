import React, { useContext } from 'react'
import styled from 'styled-components'

import SuggestionContext from 'utils/SuggestionContext'
import SearchContext from 'utils/SearchContext'

import Distance from './searchSelector/Distance'
import Itinerary from './searchSelector/Itinerary'
import Suggestion from './searchSelector/Suggestion'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0.5em;
  font-weight: 800;
  color: ${(props) => props.theme.colors.main};
`
const Select = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 0.3em);
  opacity: 0;
  cursor: pointer;
`
const Option = styled.option``
export default function SearchSelector() {
  const { suggestions } = useContext(SuggestionContext)

  const { mode, setMode } = useContext(SearchContext)

  return (
    <Wrapper>
      {mode === 'distance' ? (
        <Distance />
      ) : mode === 'itinerary' ? (
        <Itinerary />
      ) : (
        <Suggestion />
      )}
      <Select value={mode} onChange={(e) => setMode(e.target.value)}>
        <Option value='distance'>parcours .... km</Option>
        <Option value='itinerary'>vais de ...... à ......</Option>
        {suggestions.map((suggestion) => (
          <Option value={suggestion.id}>{suggestion.label.fr}</Option>
        ))}
      </Select>
    </Wrapper>
  )
}
