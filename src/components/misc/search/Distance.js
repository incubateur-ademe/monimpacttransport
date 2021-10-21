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
const Wrapper = styled.div`
  display: flex;
`
const Button = styled.button``
const Track = styled.div`
  flex: 1;
  height: 0.125rem;
  background-color: ${(props) => props.theme.colors.textLight};
`
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  const [position, setPosition] = useState(0)

  useEffect(() => {
    setKm(Math.round(Math.pow(10, position) * 10))
  }, [position, setKm])

  return (
    <Wrapper>
      <Button
        onClick={() =>
          setPosition((prevPosition) =>
            prevPosition - 0.31761 < 0 ? 0 : prevPosition - 0.31761
          )
        }
      >
        -
      </Button>
      <Range
        step={0.001}
        min={0}
        max={3.1761}
        values={[position]}
        onChange={(values) => setPosition(values[0])}
        renderTrack={({ props, children }) => (
          <Track {...props}>{children}</Track>
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
      <Button
        onClick={() =>
          setPosition((prevPosition) =>
            prevPosition + 0.31761 > 3.1761 ? 3.1761 : prevPosition + 0.31761
          )
        }
      >
        +
      </Button>
    </Wrapper>
  )
}
