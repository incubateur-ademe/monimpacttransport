import React, { useState, useEffect } from 'react'
import SuggestionContext from 'utils/SuggestionContext'

export default function TransportationProvider(props) {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    fetch('/data/suggestions.json')
      .then((res) => res.json())
      .then((res) => setSuggestions(res))
  }, [])
  return (
    <SuggestionContext.Provider value={{ suggestions }}>
      {props.children}
    </SuggestionContext.Provider>
  )
}
