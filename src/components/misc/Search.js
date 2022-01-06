import React, { useContext } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'
import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'

const Wrapper = styled.div``
const Content = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 1rem;
`
const Text = styled.p`
  max-width: 26rem;
  margin: 0 auto 1rem;
  text-align: center;
`
const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const StyledCheckbox = styled(Checkbox)`
  font-size: 0.875rem;

  &:first-child {
    margin-bottom: 0.375rem;
  }
`
export default function Search() {
  const { displayAll, setDisplayAll, carpool, setCarpool } = useContext(
    TransportationContext
  )

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
          <Route path='/teletravail'>
            <Text>
              Découvrez la quantité de CO2e que vous économisez{' '}
              <strong>(à l'année)</strong> en travaillant de chez vous
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
      <Checkboxes>
        <Route path='/'>
          <StyledCheckbox checked={displayAll} onChange={setDisplayAll}>
            Afficher <strong>tous</strong> les modes de transport
          </StyledCheckbox>
        </Route>
        <StyledCheckbox checked={carpool} onChange={setCarpool}>
          Afficher le <strong>covoiturage</strong>
        </StyledCheckbox>
      </Checkboxes>
    </Wrapper>
  )
}
