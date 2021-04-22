import React, { useEffect, useContext } from 'react'
import {
  useQueryParam,
  withDefault,
  NumberParam,
  StringParam,
  ObjectParam,
  ArrayParam,
} from 'use-query-params'
import * as turf from '@turf/turf'

import SuggestionContext from 'utils/SuggestionContext'
import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const { suggestions } = useContext(SuggestionContext)

  const [mode, setMode] = useQueryParam(
    'mode',
    withDefault(StringParam, 'distance')
  )

  const [km, setKm] = useQueryParam('km', withDefault(NumberParam, 10))

  const [alwaysVisible, setAlwaysVisibile] = useQueryParam(
    'always',
    withDefault(ArrayParam, [])
  )

  const [itinerary, setItinerary] = useQueryParam(
    'itinerary',
    withDefault(ObjectParam, {
      to: '',
      toLatitude: '',
      toLongitude: '',
      from: '',
      fromLatitude: '',
      fromLongitude: '',
    })
  )

  useEffect(() => {
    if (
      mode === 'itinerary' &&
      itinerary.fromLatitude &&
      itinerary.fromLongitude &&
      itinerary.toLatitude &&
      itinerary.toLongitude
    ) {
      const from = turf.point([
        Number(itinerary.fromLongitude),
        Number(itinerary.fromLatitude),
      ])
      const to = turf.point([
        Number(itinerary.toLongitude),
        Number(itinerary.toLatitude),
      ])
      const distance = turf.distance(from, to)
      console.log(distance)
      setKm(
        distance > 1 ? Math.round(distance) : Math.round(distance * 100) / 100
      )
    }
  }, [itinerary, setKm, mode])

  return (
    <SearchContext.Provider
      value={{
        mode,
        setMode: (newMode) => {
          window._paq.push(['trackEvent', 'mode', 'change', newMode])
          const newSuggestion = suggestions.find(
            (suggestion) => suggestion.id === Number(newMode)
          )
          if (newSuggestion) {
            setKm(newSuggestion.km)
          }
          setMode(newMode)
        },
        km,
        setKm,
        itinerary,
        setItinerary: (newItinerary) => {
          setItinerary((prevItinerary) => ({
            ...prevItinerary,
            ...newItinerary,
          }))
        },
        alwaysVisible,
        setAlwaysVisibile,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
