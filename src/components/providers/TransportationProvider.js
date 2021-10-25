import React, { useState, useEffect } from 'react'

import transportationsData from 'data/transportations.json'
import TransportationContext from 'utils/TransportationContext'

export default function TransportationProvider(props) {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    let carpoolTransportation = []
    for (let transportation of transportationsData) {
      if (transportation.carpool) {
        for (let i = 1; i < transportation.carpool; i++) {
          carpoolTransportation.push({
            ...transportation,
            id: transportation.id + '-' + i,
            label: {
              fr: transportation.label.fr,
            },
            carpoolers: Number(i + 1),
            values: [
              {
                value: transportation.values[0].value / Number(i + 1),
              },
            ],
          })
        }
      }
    }
    setTransportations(
      [...transportationsData, ...carpoolTransportation].sort((a, b) =>
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
