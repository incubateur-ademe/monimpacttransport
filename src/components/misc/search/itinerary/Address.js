import React, { useState } from 'react'
import styled from 'styled-components'

import { useAddress } from 'hooks/useAddress'
import Search from './address/Search'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
`
export default function Address(props) {
  const [address, setAddress] = useState(null)

  const { data: place } = useAddress(address?.place_id)
  console.log(place)
  console.log(address)
  return (
    <Wrapper>
      <Search
        placeholder={props.placeholder}
        address={address?.description}
        setAddress={(address) => {
          setAddress(address)
          //props.setCoordinates(address)
        }}
      />
    </Wrapper>
  )
}
