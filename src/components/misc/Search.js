import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div`
  max-width: 35rem;
  margin: 0 auto 2rem;
`
const Content = styled.div`
  position: relative;
  padding: 1.5rem 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 1rem;
`
const Text = styled.p`
  font-size: 1.25rem;
  text-align: center;
`
export default function Search() {
  return (
    <Wrapper>
      <ModeSelector />
      <Content>
        <Switch>
          <Route path='/itineraire'>
            <Text>
              Découvrez la quantité de CO2e que vous émettez{' '}
              <strong>(par personne)</strong> pour ce trajet
            </Text>
            <Itinerary />
          </Route>
          <Route path='/'>
            <Text>
              Découvrez la quantité de CO2e que vous émettez{' '}
              <strong>(par personne)</strong> pour cette distance
            </Text>
            <Distance />
          </Route>
        </Switch>
      </Content>
    </Wrapper>
  )
}
