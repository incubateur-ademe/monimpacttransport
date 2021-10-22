import React, { useState, useEffect } from 'react'
import { useQueryParam, BooleanParam, withDefault } from 'use-query-params'

import transportationsData from 'data/transportations.json'
import TransportationContext from 'utils/TransportationContext'

export default function TransportationProvider(props) {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    setTransportations(
      transportationsData.sort((a, b) =>
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
