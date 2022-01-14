import React, { useState } from 'react'
import queryString from 'query-string'

import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [km, setKm] = useState(
    queryString.parse(window.location.search).km || 10
  )

  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  const [teletravailTransportation, setTeletravailTransportation] =
    useState(null)
  const [presentiel, setPresentiel] = useState(5)
  const [teletravail, setTeletravail] = useState(0)

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
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
