import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'

import Transportation from './results/Transportation'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
`
export default function Results() {
  const { transportations, carpool, uncertainty, displayAll } = useContext(
    TransportationContext
  )
  const { km } = useContext(SearchContext)

  const [transportationsToDisplay, settransportationsToDisplay] = useState([])
  useEffect(() => {
    settransportationsToDisplay(
      transportations
        // Remove all empty transportations
        .filter((transportation) => transportation.values)
        // Show only default (or display all)
        .filter((transportation) => transportation.default || displayAll)
        // Show carpool or not
        .filter((transportation) => !transportation.carpoolers || carpool)
        // Show only depending on distance (or display all)
        .filter(
          (transportation) =>
            // Display all transportations
            displayAll ||
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
          const valueToUse =
            transportation.values.length > 1
              ? transportation.values.find((value) => value.max > km)
              : transportation.values[0]
          return {
            ...transportation,
            value:
              (valueToUse
                ? uncertainty && valueToUse.uncertainty
                  ? valueToUse.uncertainty
                  : valueToUse.value
                : 0) * km,
            base: valueToUse.value * km,
          }
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    )
  }, [km, transportations, carpool, uncertainty, displayAll])

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
                  .value
              }
            />
          </Flipped>
        ))}
      </Flipper>
    </Wrapper>
  )
}
