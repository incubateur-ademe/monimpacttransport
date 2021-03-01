import React, { useContext } from 'react'
import styled from 'styled-components'

import SuggestionContext from 'utils/SuggestionContext'
import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: relative;
`
const Km = styled.div`
  position: absolute;
  top: 100%;
  right: 1.25em;
  font-size: 1rem;
  font-weight: 600;
`
export default function Suggestion() {
  const { suggestions } = useContext(SuggestionContext)
  const { km, mode } = useContext(SearchContext)

  return (
    <Wrapper>
      {suggestions.find(({ id }) => id === Number(mode))
        ? suggestions.find(({ id }) => id === Number(mode)).label.fr
        : ' '}
      <Km>({km} km)</Km>
    </Wrapper>
  )
}
