import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import ReactMapGL, { LinearInterpolator } from 'react-map-gl'
import WebMercatorViewport from '@math.gl/web-mercator'

import useWindowSize from 'hooks/useWindowSize'
import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .mapboxgl-control-container {
    display: none;
  }
`
export default function Map() {
  const { km, mode, itinerary } = useContext(SearchContext)

  const { height, width } = useWindowSize()

  const [viewport, setViewport] = useState({
    latitude: 48.8159,
    longitude: 2.3061,
    zoom: 11,
  })

  useEffect(() => {
    console.log(itinerary)
    setViewport((viewport) =>
      mode === 'itinerary'
        ? new WebMercatorViewport({
            width,
            height,
          }).fitBounds([
            [Number(itinerary.fromLongitude), Number(itinerary.fromLatitude)],
            [Number(itinerary.toLongitude), Number(itinerary.toLatitude)],
          ])
        : /* ? new WebMercatorViewport({
            width,
            height,
          }).fitBounds([
            [2.2147121649, 48.7881366783],
            [2.4875598769, 48.9426131391],
          ])*/
          {
            ...viewport,
            latitude: 48.8159,
            longitude: 2.3061,
            zoom: Math.log2(25000 / (((km ? km : 1) * 1000) / width)),
            // zoom: 14,
            transitionInterpolator: new LinearInterpolator(),
            transitionDuration: 600,
          }
    )
  }, [km, height, width, mode, itinerary])

  return (
    <Wrapper>
      <ReactMapGL
        {...viewport}
        width='100%'
        height='100%'
        mapStyle={'mapbox://styles/florianpanchout/ckkcsfbzm0ab617p8elhz6k8r'}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      />
    </Wrapper>
  )
}
