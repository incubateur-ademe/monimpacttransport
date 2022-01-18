import React, { useContext } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'
import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'
import Teletravail from './search/Teletravail'

const Wrapper = styled.div``
const Content = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 1rem;

  ${(props) => props.theme.mq.small} {
    padding: 1.5rem;
  }
`
const Text = styled.p`
  max-width: 26rem;
  margin: 0 auto 1rem;
  text-align: center;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.second};
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
              <Color>(par personne)</Color> pour ce trajet
            </Text>
            <Itinerary />
          </Route>
          <Route path='/teletravail'>
            <Text>
              Découvrez la quantité de CO2e que vous économisez{' '}
              <Color>(à l'année)</Color> en travaillant de chez vous
            </Text>
            <Teletravail />
          </Route>
          <Route>
            <Text>
              Découvrez la quantité de CO2e que vous émettez{' '}
              <Color>(par personne)</Color> pour cette distance
            </Text>
            <Distance />
          </Route>
        </Switch>
      </Content>
      <Checkboxes>
        <Route path='/' exact>
          <StyledCheckbox checked={displayAll} onChange={setDisplayAll}>
            Afficher tous les modes de transport
          </StyledCheckbox>
          <StyledCheckbox
            checked={carpool}
            onChange={() => setCarpool((prevCarpool) => (prevCarpool ? 0 : 2))}
          >
            Afficher le covoiturage
          </StyledCheckbox>
        </Route>
        <Route path='/itineraire'>
          <StyledCheckbox
            checked={carpool}
            onChange={() => setCarpool((prevCarpool) => (prevCarpool ? 0 : 2))}
          >
            Afficher le covoiturage
          </StyledCheckbox>
        </Route>
      </Checkboxes>
    </Wrapper>
  )
}
