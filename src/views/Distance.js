import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import useIframe from 'hooks/useIframe'

import Transportation from 'components/misc/Transportation'
import Disclaimer from 'components/misc/Disclaimer'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
`
export default function Results() {
  const iframe = useIframe(true)

  useEffect(() => {
    if (!iframe) {
      document.title = 'Mon Impact Transport'
      document.getElementById('Accueil')?.focus()
      document.activeElement.blur()
    }
  }, [iframe])

  const { transportations, carpool, uncertainty, displayAll, construction } =
    useContext(TransportationContext)
  const { km } = useContext(SearchContext)

  const [transportationsToDisplay, settransportationsToDisplay] = useState([])
  useEffect(() => {
    settransportationsToDisplay(
      transportations
        // Remove all empty transportations
        .filter(
          (transportation) =>
            transportation[construction ? 'construction' : 'values']
        )
        // Show only default (or display all)
        .filter((transportation) => transportation.default || displayAll)
        // Show carpool or not
        .filter((transportation) => !transportation.carpool || carpool)
        // Show only depending on distance (or display all)
        .filter(
          (transportation) =>
            // Display all transportations
            displayAll ||
            // Show construction
            construction ||
            // No display indicator at all
            !transportation.display ||
            // Empty display indicator
            (!transportation.display.min && !transportation.display.max) ||
            //Only max
            (!transportation.display.min && transportation.display.max >= km) ||
            //Only min
            (!transportation.display.max && transportation.display.min <= km) ||
            //Both min and max
            (transportation.display.min <= km &&
              transportation.display.max >= km)
        )
        .map((transportation) => {
          const valuesToUse =
            transportation.values.length > 1
              ? transportation.values.find((value) => value.max > km)
              : transportation.values[0]
          const valueToUse = valuesToUse?.value * km || 0
          const uncertaintyToUse = valuesToUse?.uncertainty * km || 0
          const valueWithCarpool = transportation.carpool
            ? valueToUse / carpool
            : valueToUse

          const constructionToUse =
            ((transportation.construction || 0) * km) /
            (transportation.carpool ? carpool : 1)

          return {
            ...transportation,
            value: valueWithCarpool,
            construction: constructionToUse,
            uncertainty: uncertaintyToUse,
            total: construction
              ? valueWithCarpool + constructionToUse + uncertaintyToUse
              : valueWithCarpool + uncertaintyToUse,
          }
        })
        .sort((a, b) => (a.total > b.total ? 1 : -1))
    )
  }, [km, transportations, carpool, uncertainty, displayAll, construction])

  return (
    <Wrapper>
      <Flipper
        flipKey={transportationsToDisplay
          .map((transportation) => transportation.id)
          .join()}
      >
        {transportationsToDisplay.map((transportation) => (
          <Flipped flipId={transportation.id} key={transportation.id}>
            <Transportation
              transportation={transportation}
              max={
                transportationsToDisplay[transportationsToDisplay.length - 1]
                  .total
              }
              construction={construction}
            />
          </Flipped>
        ))}
      </Flipper>
      <Disclaimer />
    </Wrapper>
  )
}
