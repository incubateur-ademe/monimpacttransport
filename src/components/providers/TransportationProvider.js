import React, { useEffect } from 'react'
import {
  useQueryParam,
  BooleanParam,
  NumberParam,
  DelimitedArrayParam,
  withDefault,
} from 'use-query-params'

import useTransportations from 'hooks/useTransportations'
import TransportationContext from 'utils/TransportationContext'

export default function TransportationProvider(props) {
  const transportations = useTransportations()

  const [transportationsVisibles, setTransportationsVisibles] = useQueryParam(
    'transportations',
    withDefault(DelimitedArrayParam, [])
  )
  const [transportationsAlwaysVisibles, setTransportationsAlwaysVisibles] =
    useQueryParam('always', withDefault(DelimitedArrayParam, []))

  useEffect(() => {
    if (!transportationsVisibles.length) {
      setTransportationsVisibles(
        transportations
          .filter((transportation) => transportation.default)
          .map((transportation) => transportation.id)
      )
    }
  }, [transportations, transportationsVisibles, setTransportationsVisibles])

  const [carpool, setCarpool] = useQueryParam(
    'carpool',
    withDefault(NumberParam, 1)
  )

  const [uncertainty, setUncertainty] = useQueryParam(
    'uncertainty',
    withDefault(BooleanParam, true)
  )

  return (
    <TransportationContext.Provider
      value={{
        transportations,
        transportationsVisibles,
        transportationsAlwaysVisibles,
        carpool,
        setCarpool,
        uncertainty,
        setUncertainty,
        toggleVisible: (id) => {
          setTransportationsVisibles((oldVisibles) =>
            oldVisibles.includes(String(id))
              ? oldVisibles.filter(
                  (visibleId) => String(visibleId) !== String(id)
                )
              : [...oldVisibles, id]
          )
          setTransportationsAlwaysVisibles((oldAlwaysVisibles) =>
            oldAlwaysVisibles.filter(
              (alwaysId) => String(alwaysId) !== String(id)
            )
          )
        },
        toggleAlwaysVisible: (id) => {
          setTransportationsVisibles((oldVisibles) =>
            oldVisibles.includes(String(id))
              ? oldVisibles
              : [...oldVisibles, id]
          )
          setTransportationsAlwaysVisibles((oldAlwaysVisibles) =>
            oldAlwaysVisibles.includes(String(id))
              ? oldAlwaysVisibles.filter(
                  (alwaysId) => String(alwaysId) !== String(id)
                )
              : [...oldAlwaysVisibles, id]
          )
        },
        reset: () => {
          setTransportationsVisibles(
            transportations
              .filter((transportation) => transportation.default)
              .map((transportation) => transportation.id)
          )
          setTransportationsAlwaysVisibles([])
          setCarpool(1)
        },
      }}
    >
      {props.children}
    </TransportationContext.Provider>
  )
}
