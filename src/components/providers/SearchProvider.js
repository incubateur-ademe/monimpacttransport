import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useQueryParam, StringParam } from 'use-query-params'

import SearchContext from 'utils/SearchContext'
import { useAddress } from 'hooks/useAddress'

export default function SearchProvider(props) {
  const [km, setKm] = useState(
    queryString.parse(window.location.search).km || 10
  )

  const [start, setStart] = useState(null)
  const [startPlace, setStartPlace] = useQueryParam('start', StringParam)
  const { data: startPlaceData } = useAddress(startPlace)
  useEffect(() => {
    startPlaceData?.result?.geometry?.location &&
      setStart({
        latitude: startPlaceData.result.geometry.location.lat,
        longitude: startPlaceData.result.geometry.location.lng,
        address: startPlaceData.result.formatted_address,
      })
  }, [startPlaceData, setStart])

  const [end, setEnd] = useState(null)
  const [endPlace, setEndPlace] = useQueryParam('end', StringParam)
  const { data: endPlaceData } = useAddress(endPlace)
  useEffect(() => {
    endPlaceData?.result?.geometry?.location &&
      setEnd({
        latitude: endPlaceData.result.geometry.location.lat,
        longitude: endPlaceData.result.geometry.location.lng,
        address: endPlaceData.result.formatted_address,
      })
  }, [endPlaceData, setEnd])

  const [teletravailTransportation, setTeletravailTransportation] =
    useState(null)
  const [presentiel, setPresentiel] = useState(5)
  const [teletravail, setTeletravail] = useState(0)
  const [days, setDays] = useState('5')
  const [holidays, setHolidays] = useState('5')
  const [extraKm, setExtraKm] = useState('0.25')
  const [yearlyFootprint, setYearlyFootprint] = useState(10)

  return (
    <SearchContext.Provider
      value={{
        km,
        setKm,
        start,
        startPlace,
        setStartPlace,
        end,
        endPlace,
        setEndPlace,
        teletravailTransportation,
        setTeletravailTransportation,
        presentiel,
        setPresentiel,
        teletravail,
        setTeletravail,
        days,
        setDays,
        holidays,
        setHolidays,
        extraKm,
        setExtraKm,
        yearlyFootprint,
        setYearlyFootprint,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
