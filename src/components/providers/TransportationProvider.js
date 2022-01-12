import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

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
const filterTransportation = (transportations, query) => {
  if (query) {
    const queriedTransportations = query.split('_')
    return transportations.filter((transportation) =>
      queriedTransportations.find(
        (queriedTransportation) =>
          Number(queriedTransportation) === transportation.id
      )
    )
  } else {
    return transportations
  }
}
export default function TransportationProvider(props) {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    let filteredTransportations = filterTransportation(
      transportationsData,
      queryString.parse(window.location.search).transportations
    )
    let carpoolTransportation = addCarpoolTransportations(
      filteredTransportations
    )
    setTransportations(
      [...filteredTransportations, ...carpoolTransportation].sort((a, b) =>
        a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
      )
    )
  }, [])

  const [itineraryTransportations, setItineraryTransportations] = useState([])
  useEffect(() => {
    let filteredTransportations = filterTransportation(
      itineraryTransportationsData,
      queryString.parse(window.location.search).transportations
    )
    let carpoolTransportation = addCarpoolTransportations(
      filteredTransportations
    )
    setItineraryTransportations(
      [...filteredTransportations, ...carpoolTransportation].sort((a, b) =>
        a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
      )
    )
  }, [])

  const [displayAll, setDisplayAll] = useState(
    queryString.parse(window.location.search).all || false
  )

  const [carpool, setCarpool] = useState(
    queryString.parse(window.location.search).carpool || 0
  )

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
