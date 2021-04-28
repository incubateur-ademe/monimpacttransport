import React, { useState, useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'
import ReactMapGL, { LinearInterpolator } from 'react-map-gl'
import WebMercatorViewport from '@math.gl/web-mercator'

import UXContext from 'utils/UXContext'
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

  const { center } = useContext(UXContext)

  const { height, width } = useWindowSize()

  const [viewport, setViewport] = useState({
    latitude: Number(center.lat),
    longitude: Number(center.long),
    zoom: 11,
  })

  const timer = useRef()

  useEffect(() => {
    timer.current = setTimeout(
      () =>
        Number(km) &&
        setViewport((viewport) =>
          mode === 'itinerary' && (itinerary.from || itinerary.to)
            ? new WebMercatorViewport({
                width,
                height,
              }).fitBounds([
                [
                  Number(itinerary.fromLongitude),
                  Number(itinerary.fromLatitude),
                ],
                [Number(itinerary.toLongitude), Number(itinerary.toLatitude)],
              ])
            : {
                ...viewport,
                latitude: Number(center.lat),
                longitude: Number(center.long),
                zoom: Math.log2(25000 / (((km ? km : 1) * 1000) / width)),
                transitionInterpolator: new LinearInterpolator(),
                transitionDuration: 600,
              }
        ),
      500
    )
    return () => clearTimeout(timer.current)
  }, [timer, km, center, height, width, mode, itinerary])

  return (
    <Wrapper>
      <ReactMapGL
        {...viewport}
        width='100%'
        height='100%'
        mapStyle={'mapbox://styles/florianpanchout/cknr9isnk0jhd17o1r4v4dc4i'}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      />
    </Wrapper>
  )
}
