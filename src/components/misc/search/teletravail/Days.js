import React, { useState } from 'react'
import styled from 'styled-components'

import Selector from './days/Selector'

const Wrapper = styled.div`
  display: flex;
`
export default function Days() {
  const [presentiel, setPresentiel] = useState(5)
  const [teletravail, setTeletravail] = useState(0)
  return (
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
          if (teletravail + value > 5) {
            setPresentiel(5 - value)
          }
        }}
      />
    </Wrapper>
  )
}
