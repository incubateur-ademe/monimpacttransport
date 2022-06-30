import React, { useState } from 'react'
import queryString from 'query-string'
import { useQueryParam, ObjectParam } from 'use-query-params'

import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [km, setKm] = useState(
    queryString.parse(window.location.search).km || 10
  )

  const [start, setStart] = useQueryParam('start', ObjectParam)
  const [end, setEnd] = useQueryParam('end', ObjectParam)

  const [teletravailTransportation, setTeletravailTransportation] =
    useState(null)
  const [presentiel, setPresentiel] = useState(5)
  const [teletravail, setTeletravail] = useState(0)
  const [days, setDays] = useState('5')
  const [holidays, setHolidays] = useState('5')
  const [extraKm, setExtraKm] = useState('0.25')
  const [yearlyFootprint, setYearlyFootprint] = useState(9.9)

  return (
    <SearchContext.Provider
      value={{
        km,
        setKm,
        start,
        setStart,
        end,
        setEnd,
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
