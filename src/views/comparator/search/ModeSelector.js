import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.15rem 1rem 0.6rem;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 0 0 2.5rem 2.5rem;
  box-shadow: 0 0.5px 12.4px rgba(0, 0, 0, 0.215),
    0 1.3px 22.7px rgba(0, 0, 0, 0.286), 0 3px 36.1px rgba(0, 0, 0, 0.344),
    0 10px 80px rgba(0, 0, 0, 0.5);
  transition: all 400ms ease-out;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0.5px 12.4px rgba(0, 0, 0, 0.322),
      0 1.3px 22.7px rgba(0, 0, 0, 0.429), 0 3px 36.1px rgba(0, 0, 0, 0.516),
      0 10px 80px rgba(0, 0, 0, 0.75);
    svg {
      path {
        stroke-dashoffset: 1738.66479;
      }
    }
  }

  ${(props) => props.theme.mq.small} {
    padding: 0.25rem 0.7rem 0.3rem;
  }
`
const Itinerary = styled.svg`
  display: block;
  width: 2rem;
  height: auto;
  transition: all 300ms ease-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  ${(props) => props.theme.mq.small} {
    width: 1.5rem;
  }
`
const Marker = styled.path`
  fill: ${(props) => props.theme.colors.quad};
`
const Path = styled.path`
  stroke: ${(props) => props.theme.colors.quad};
  stroke-width: 30;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: transparent;
  stroke-dasharray: 869.3323974609375;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 600ms ease-out;
`
const Distance = styled.div`
  position: absolute;
  top: calc(50% - 0.2em);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
export default function ModeSelector() {
  const { mode, setMode } = useContext(SearchContext)
  return (
    <Wrapper
      onClick={() =>
        setMode((prevMode) =>
          prevMode === 'distance' ? 'itinerary' : 'distance'
        )
      }
    >
      <Itinerary
        visible={mode === 'distance'}
        width='555'
        height='662'
        viewBox='0 0 555 662'
      >
        <Marker d='M78.5117 486.667C74.6504 486.667 70.7891 485.28 67.7171 482.485C65.5624 480.501 14.5117 433.312 14.5117 384.011C14.5117 346.507 43.2264 316 78.5117 316C113.797 316 142.512 346.507 142.512 384.011C142.512 433.333 91.4611 480.501 89.3064 482.485C86.2344 485.28 82.3731 486.667 78.5117 486.667Z' />
        <Marker d='M447.846 0C389.03 0 341.18 48.448 341.18 107.989C341.18 190.187 433.51 270.123 437.457 273.493C440.444 276.053 444.134 277.333 447.846 277.333C451.558 277.333 455.249 276.053 458.236 273.493C462.182 270.123 554.513 190.187 554.513 107.989C554.513 48.448 506.662 0 447.846 0V0ZM447.846 149.333C424.316 149.333 405.18 130.197 405.18 106.667C405.18 83.136 424.316 64 447.846 64C471.377 64 490.513 83.136 490.513 106.667C490.513 130.197 471.377 149.333 447.846 149.333Z' />
        <Path
          id='path'
          d='M453.509 292L205.508 292L205.508 301L405.51 489.5L405.51 501.998L80.5093 502'
        />
      </Itinerary>
      <Distance visible={mode === 'itinerary'}>km</Distance>
    </Wrapper>
  )
}
