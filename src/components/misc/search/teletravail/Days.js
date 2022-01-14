import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Selector from './days/Selector'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export default function Days() {
  const {
    start,
    end,
    teletravailTransportation,
    presentiel,
    setPresentiel,
    teletravail,
    setTeletravail,
  } = useContext(SearchContext)

  return (
    start &&
    end &&
    teletravailTransportation && (
      <Wrapper>
        <Selector
          label='Présentiel'
          value={presentiel}
          onChange={(value) => {
            setPresentiel(value)
            if (teletravail + value > 5) {
              setTeletravail(5 - value)
            }
          }}
        />
        <Selector
          label='Télétravail'
          value={teletravail}
          onChange={(value) => {
            setTeletravail(value)
            if (presentiel + value > 5) {
              setPresentiel(5 - value)
            }
          }}
        />
      </Wrapper>
    )
  )
}
