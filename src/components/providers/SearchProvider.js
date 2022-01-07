import React, { useState } from 'react'

import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [km, setKm] = useState(10)

  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  return (
    <SearchContext.Provider
      value={{
        km,
        setKm,
        start,
        setStart,
        end,
        setEnd,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
