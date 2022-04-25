import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import { useItinerary } from 'hooks/useItineraries'
import Transportation from 'components/misc/Transportation'
import Disclaimer from 'components/misc/Disclaimer'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
`
export default function Itinerary() {
  useEffect(() => {
    document.title = 'Itinéraire | Mon Impact Transport'
    document.getElementById('Accueil').focus()
    document.activeElement.blur()
  }, [])

  const { start, end } = useContext(SearchContext)

  const { data: carItineraries } = useItinerary(start, end, 'driving')
  const { data: footItineraries } = useItinerary(start, end, 'walking')
  const { data: railItineraries } = useItinerary(start, end, 'transit')
  const [planeDistance, setPlaneDistance] = useState(0)

  const [datas, setDatas] = useState({ car: 0, foot: 0, rail: 0, plane: 0 })
  useEffect(() => {
    setDatas({
      car:
        carItineraries &&
        carItineraries[0].elements[0].status === 'OK' &&
        carItineraries[0].elements[0].distance.value,
      foot:
        footItineraries &&
        footItineraries[0].elements[0].status === 'OK' &&
        footItineraries[0].elements[0].distance.value,
      rail:
        railItineraries &&
        (railItineraries[0].elements[0].status === 'OK'
          ? railItineraries[0].elements[0].distance.value
          : carItineraries &&
            carItineraries[0].elements[0].status === 'OK' &&
            carItineraries[0].elements[0].distance.value),
      plane: planeDistance,
    })
  }, [carItineraries, footItineraries, railItineraries, planeDistance])

  const {
    itineraryTransportations: transportations,
    carpool,
    uncertainty,
  } = useContext(TransportationContext)

  useEffect(() => {
    if (start && end) {
      const R = 6371e3 // metres
      const φ1 = (start.latitude * Math.PI) / 180 // φ, λ in radians
      const φ2 = (end.latitude * Math.PI) / 180
      const Δφ = ((end.latitude - start.latitude) * Math.PI) / 180
      const Δλ = ((end.longitude - start.longitude) * Math.PI) / 180

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

      setPlaneDistance(R * c)
    }
  }, [start, end])

  const [transportationsToDisplay, settransportationsToDisplay] = useState([])
  useEffect(() => {
    settransportationsToDisplay(
      transportations
        // Remove all empty transportations
        .filter((transportation) => transportation.values)
        // Show carpool or not
        .filter((transportation) => !transportation.carpool || carpool)
        // Show only depending on distance (or display all)
        .filter((transportation) => datas[transportation.type])
        .filter(
          (transportation) =>
            // No display indicator at all
            !transportation.display ||
            // Empty display indicator
            (!transportation.display.min && !transportation.display.max) ||
            //Only max
            (!transportation.display.min &&
              transportation.display.max >=
                datas[transportation.type] / 1000) ||
            //Only min
            (!transportation.display.max &&
              transportation.display.min <=
                datas[transportation.type] / 1000) ||
            //Both min and max
            (transportation.display.min <= datas[transportation.type] / 1000 &&
              transportation.display.max >= datas[transportation.type] / 1000)
        )
        .map((transportation) => {
          const valuesToUse =
            transportation.values.length > 1
              ? transportation.values.find(
                  (value) => value.max > datas[transportation.type] / 1000
                )
              : transportation.values[0]
          const valueToUse =
            ((valuesToUse
              ? uncertainty && valuesToUse.uncertainty
                ? valuesToUse.uncertainty
                : valuesToUse.value
              : 0) *
              datas[transportation.type]) /
            1000
          const valueWithCarpool = transportation.carpool
            ? valueToUse / carpool
            : valueToUse
          return {
            ...transportation,
            value: valueWithCarpool,
            base: (valueToUse.value * datas[transportation.type]) / 1000,
          }
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    )
  }, [datas, transportations, carpool, uncertainty])

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
              distance={datas[transportation.type]}
            />
          </Flipped>
        ))}
      </Flipper>
      <Disclaimer itinerary />
    </Wrapper>
  )
}
