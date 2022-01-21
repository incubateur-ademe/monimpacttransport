import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Range } from 'react-range'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 30rem;
  height: 2.5rem;
  margin: 0 auto;
`
const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    display: block;
    width: 1.5rem;
    height: auto;

    path {
      fill: ${(props) => props.theme.colors.main};
    }
  }
`
const Track = styled.div`
  position: relative;
  flex: 1;
  height: 0.125rem;
  margin: 0 3.75rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2.75rem;
    right: -2.75rem;
    background-color: ${(props) => props.theme.colors.textLight};
  }
`
const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 1.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125rem ${(props) => props.theme.colors.mainLight};
  }
`
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  // Please don't ask
  const [position, setPosition] = useState(
    Math.round(
      (Math.log((km > 10000 ? 10000 : km) * 10) / Math.log(10) - 1) * 1000
    ) / 1000
  )

  useEffect(() => {
    setKm(Math.round(Math.pow(10, position)))
  }, [position, setKm])

  return (
    <Wrapper>
      <Button
        aria-label='moins'
        onClick={() =>
          setPosition((prevPosition) =>
            prevPosition - 0.4 < 0 ? 0 : prevPosition - 0.4
          )
        }
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12C0 9.79086 1.79086 8 4 8H20C22.2091 8 24 9.79086 24 12C24 14.2091 22.2091 16 20 16H4C1.79086 16 0 14.2091 0 12Z'
            fill='#DE0244'
          />
        </svg>
      </Button>
      <Range
        step={0.001}
        min={0}
        max={4}
        values={[position]}
        onChange={(values) => setPosition(values[0])}
        renderTrack={({ props, children }) => (
          <Track {...props}>{children}</Track>
        )}
        renderThumb={({ props }) => (
          <Thumb {...props} aria-label='Distance'>
            {km} km
          </Thumb>
        )}
      />
      <Button
        aria-label='plus'
        onClick={() =>
          setPosition((prevPosition) =>
            prevPosition + 0.4 > 4 ? 4 : prevPosition + 0.4
          )
        }
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12C0 9.79086 1.79086 8 4 8H20C22.2091 8 24 9.79086 24 12C24 14.2091 22.2091 16 20 16H4C1.79086 16 0 14.2091 0 12Z'
            fill='#DE0244'
          />
          <path
            d='M12 24C9.79086 24 8 22.2091 8 20L8 4C8 1.79086 9.79086 9.65645e-08 12 0C14.2091 -9.65645e-08 16 1.79086 16 4L16 20C16 22.2091 14.2091 24 12 24Z'
            fill='#DE0244'
          />
        </svg>
      </Button>
    </Wrapper>
  )
}
