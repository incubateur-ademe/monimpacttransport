import React, { useState } from 'react'

import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [km, setKm] = useState(10)

  return (
    <SearchContext.Provider
      value={{
        km,
        setKm,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
