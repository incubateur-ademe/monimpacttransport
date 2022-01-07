import React, { useState } from 'react'
import styled from 'styled-components'

import Search from './address/Search'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
`
export default function Address(props) {
  const [address, setAddress] = useState('')
  return (
    <Wrapper>
      <Search
        placeholder={props.placeholder}
        address={address}
        setAddress={(address) => {
          setAddress(address.label)
          props.setCoordinates(address)
        }}
      />
    </Wrapper>
  )
}
