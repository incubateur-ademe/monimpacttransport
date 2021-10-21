import { useState, useEffect } from 'react'

import transportationsData from 'data/transportations.json'

export default function useTransportations() {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    console.log('Effect')
    setTransportations(
      transportationsData.sort((a, b) =>
        a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD') ? 1 : -1
      )
    )
  }, [])
  return transportations
}
