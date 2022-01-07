import React, { useContext } from 'react'

import SearchContext from 'utils/SearchContext'
import { useCarItineraries } from 'hooks/useItineraries'
import image from './itinerary/itinerary.jpeg'

export default function Itinerary() {
  const { start, end } = useContext(SearchContext)

  const { data: carItineraries } = useCarItineraries(start, end)
  console.log(carItineraries)
  return <img src={image} alt='mode itineraire' />
}
