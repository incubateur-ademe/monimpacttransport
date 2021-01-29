import React, { useContext } from 'react'
import styled from 'styled-components'
import Geocoder from 'react-mapbox-gl-geocoder'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 45rem;
  margin: 0 0 1.5rem ${(props) => (props.from ? '5rem' : '10rem')};
  font-size: 1.5rem;
  line-height: 1.7;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.main};
  }

  input {
    position: relative;
    z-index: 10;
    width: calc(100% - 0.6rem);
    margin-left: 0.6rem;
    padding: 0.4rem 0.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.main};
    border: none;

    &:focus {
      outline: none;
    }
  }

  .react-geocoder {
    width: 100%;
  }
  .react-geocoder-results {
    position: absolute;
    z-index: 15;
    margin-left: 0.6rem;
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.main};
  }
  .react-geocoder-item {
    padding: 0.3rem 0;
    cursor: pointer;
  }
`
const Sentence = styled.div``
const Km = styled.div`
  position: absolute;
  top: 100%;
  right: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
`
export default function GeoInput(props) {
  const { km, itinerary, setItinerary } = useContext(SearchContext)

  return (
    <Wrapper from={props.from}>
      <Sentence>{props.from ? 'de' : 'à'}</Sentence>
      <Geocoder
        initialInputValue={itinerary[props.from ? 'from' : 'to']}
        updateInputOnSelect={true}
        onSelected={(itinerary, item) => {
          setItinerary({
            [props.from ? 'from' : 'to']: item.place_name,
            [props.from ? 'fromLatitude' : 'toLatitude']: itinerary.latitude,
            [props.from ? 'fromLongitude' : 'toLongitude']: itinerary.longitude,
          })
        }}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      />
      {props.to && <Km>({km} km)</Km>}
    </Wrapper>
  )
}
