import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'

import Transportation from './results/Transportation'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2em;
`
export default function Results() {
  const { transportations } = useContext(TransportationContext)
  const { km } = useContext(SearchContext)

  const [transportationsToDisplay, settransportationsToDisplay] = useState([])
  useEffect(() => {
    settransportationsToDisplay(
      transportations
        .filter(
          (transportation) =>
            !transportation.display ||
            (!transportation.display.min && !transportation.display.max) ||
            (!transportation.display.min && transportation.display.max >= km) ||
            (!transportation.display.max && transportation.display.min <= km) ||
            (!transportation.display.min <= km &&
              transportation.display.max >= km)
        )
        .map((transportation) => ({
          ...transportation,
          value: transportation.values[0].value * km,
        }))
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    )
  }, [km, transportations])

  return (
    <Wrapper>
      {transportationsToDisplay.map((transportation) => (
        <Transportation
          transportation={transportation}
          max={
            transportationsToDisplay[transportationsToDisplay.length - 1].value
          }
        />
      ))}
    </Wrapper>
  )
}
