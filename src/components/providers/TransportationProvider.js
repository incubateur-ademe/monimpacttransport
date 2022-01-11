import React, { useState, useEffect } from 'react'

import transportationsData from 'data/transportations.json'
import itineraryTransportationsData from 'data/itinerary.json'
import TransportationContext from 'utils/TransportationContext'

const addCarpoolTransportations = (transportations) => {
  let carpoolTransportation = []
  for (let transportation of transportations) {
    if (transportation.carpool) {
      carpoolTransportation.push({
        ...transportation,
        id: transportation.id + '-carpool',
        carpool: false,
      })
    }
  }
  return carpoolTransportation
}
export default function TransportationProvider(props) {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    let carpoolTransportation = addCarpoolTransportations(transportationsData)
    setTransportations(
      [...transportationsData, ...carpoolTransportation].sort((a, b) =>
        a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
      )
    )
  }, [])

  const [itineraryTransportations, setItineraryTransportations] = useState([])
  useEffect(() => {
    let carpoolTransportation = addCarpoolTransportations(
      itineraryTransportationsData
    )
    setItineraryTransportations(
      [...itineraryTransportationsData, ...carpoolTransportation].sort((a, b) =>
        a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
      )
    )
  }, [])

  const [displayAll, setDisplayAll] = useState(false)

  const [carpool, setCarpool] = useState(false)

  const [uncertainty, setUncertainty] = useState(true)

  return (
    <TransportationContext.Provider
      value={{
        transportations,
        itineraryTransportations,
        carpool,
        setCarpool,
        uncertainty,
        setUncertainty,
        displayAll,
        setDisplayAll,
      }}
    >
      {props.children}
    </TransportationContext.Provider>
  )
}
