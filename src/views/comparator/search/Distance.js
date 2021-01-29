import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

import TextInput from 'components/base/TextInput'

const Wrapper = styled.div`
  position: relative;
  display: flex;
`
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  return (
    <Wrapper>
      parcours
      <TextInput type='number' value={km} onChange={(value) => setKm(value)} />
      km
    </Wrapper>
  )
}
