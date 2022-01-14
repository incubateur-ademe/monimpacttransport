import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import { useItinerary } from 'hooks/useItineraries'

const Wrapper = styled.div`
  position: relative;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 3.5rem;
`
const Emitted = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.percent}%;
  height: 100%;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 3.5rem;
  transition: width 300ms ease-out;
`
const Saved = styled(Emitted)`
  left: auto;
  right: 0;
  transform-origin: right;
  color: ${(props) => props.theme.colors.second};
  background-color: transparent;
`
const Content = styled.div`
  padding-top: 2rem;
  text-align: center;
  line-height: 1.4rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => (props.visible ? 300 : 0)}ms
    ${(props) => (props.visible ? 200 : 0)}ms; ;
`
const Small = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => (props.visible ? 300 : 0)}ms
    ${(props) => (props.visible ? 200 : 0)}ms; ;
`
const Number = styled.span`
  font-size: 2em;
  font-weight: bold;
`
export default function Teletravail() {
  const { start, end, teletravailTransportation, presentiel, teletravail } =
    useContext(SearchContext)

  const { itineraryTransportations: transportations } = useContext(
    TransportationContext
  )

  const [currentTransportation, setCurrentTransportation] = useState(null)
  useEffect(() => {
    setCurrentTransportation(
      transportations.find(
        (transportation) => transportation.id === teletravailTransportation
      )
    )
  }, [transportations, teletravailTransportation])

  const [distance, setDistance] = useState(0)
  const types = { car: 'driving', foot: 'walking', rail: 'transit' }
  const { data: itinerary } = useItinerary(
    start,
    end,
    types[currentTransportation?.type]
  )
  useEffect(() => {
    setDistance(
      itinerary &&
        itinerary[0].elements[0].status === 'OK' &&
        itinerary[0].elements[0].distance.value
    )
  }, [itinerary])

  const [emitted, setEmitted] = useState(0)
  const [saved, setSaved] = useState(0)
  useEffect(() => {
    if (distance && currentTransportation) {
      setSaved(
        Math.round(
          (currentTransportation.values[0].value *
            (distance - distance * 0.25) *
            teletravail *
            (52 - 5 - 1)) /
            1000000
        )
      )
      setEmitted(
        Math.round(
          (currentTransportation.values[0].value *
            distance *
            presentiel *
            (52 - 5 - 1)) /
            1000000
        )
      )
    }
  }, [presentiel, teletravail, distance, currentTransportation])

  return distance && currentTransportation ? (
    <Wrapper>
      <Emitted percent={(emitted / (emitted + saved)) * 100}>
        <Content
          visible={emitted}
          small={(emitted / (emitted + saved)) * 100 < 25}
        >
          <Number>{emitted}</Number> kgCO2<sub>e</sub>
          <br />
          émis
          <br />
          <Small visible={(emitted / (emitted + saved)) * 100 >= 25}>
            sur {presentiel} jour{presentiel > 1 && 's'}
          </Small>
        </Content>
      </Emitted>
      <br />
      <Saved percent={(saved / (emitted + saved)) * 100}>
        <Content visible={saved} small={(saved / (emitted + saved)) * 100 < 25}>
          <Number>{saved}</Number> kgCO2<sub>e</sub>
          <br />
          évité{saved > 1 && 's'}
          <br />
          <Small visible={(saved / (emitted + saved)) * 100 >= 25}>
            {' '}
            sur {teletravail} jour{teletravail > 1 && 's'}
          </Small>
        </Content>
      </Saved>
    </Wrapper>
  ) : null
}
