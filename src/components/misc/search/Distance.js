import React, { useState, useEffect, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { Range } from 'react-range'

import SearchContext from 'utils/SearchContext'

const flash = keyframes`
  from,
  75%,
  87.5%,
  to {
    opacity: 1;
  }

  81.25%,
  93.75% {
    opacity: 0;
  }
`
const Wrapper = styled.div``
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  const [position, setPosition] = useState(3.17)

  useEffect(() => {
    setKm(Math.round(Math.pow(10, position) * 10))
  }, [position, setKm])
  return (
    <Wrapper>
      <Range
        step={0.001}
        min={0}
        max={3.1761}
        values={[position]}
        onChange={(values) => setPosition(values[0])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999',
            }}
          >
            {km}
          </div>
        )}
      />
    </Wrapper>
  )
}
