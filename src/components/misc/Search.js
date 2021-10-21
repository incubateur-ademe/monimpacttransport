import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div``
const Content = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 1rem;
`
const Text = styled.p`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  text-align: center;
`
export default function Search() {
  const { mode } = useContext(SearchContext)

  return (
    <Wrapper>
      <ModeSelector />
      <Content>
        <Text>
          Découvrez la quantité de CO2e que vous émettez{' '}
          <strong>(par personne)</strong> pour cette distance
        </Text>
        {mode === 'itinerary' ? <Itinerary /> : <Distance />}
      </Content>
    </Wrapper>
  )
}
