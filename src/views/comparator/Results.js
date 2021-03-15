import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'

import Transportation from './results/Transportation'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
`
export default function Results() {
  const {
    transportations,
    transportationsVisibles,
    transportationsAlwaysVisibles,
    carpool,
    uncertainty,
  } = useContext(TransportationContext)
  const { km } = useContext(SearchContext)

  const [transportationsToDisplay, settransportationsToDisplay] = useState([])
  useEffect(() => {
    settransportationsToDisplay(
      transportations
        .filter((transportation) =>
          transportationsVisibles.includes(String(transportation.id))
        )
        .filter(
          (transportation) =>
            // Always visible
            transportationsAlwaysVisibles.includes(String(transportation.id)) ||
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
          const carpoolers = transportation.carpool
            ? carpool > transportation.carpool
              ? transportation.carpool
              : carpool
            : 1
          return {
            ...transportation,
            value:
              ((valueToUse
                ? uncertainty && valueToUse.uncertainty
                  ? valueToUse.uncertainty
                  : valueToUse.value
                : 0) *
                km) /
              carpoolers,
            carpoolers,
          }
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    )
  }, [
    km,
    transportations,
    transportationsVisibles,
    transportationsAlwaysVisibles,
    carpool,
    uncertainty,
  ])

  return (
    <Wrapper>
      {transportationsToDisplay.map((transportation) => (
        <Transportation
          key={transportation.id}
          transportation={transportation}
          max={
            transportationsToDisplay[transportationsToDisplay.length - 1].value
          }
        />
      ))}
    </Wrapper>
  )
}
