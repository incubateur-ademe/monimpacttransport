import React from 'react'
import styled from 'styled-components'

import Search from './address/Search'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
`
export default function Address(props) {
  return (
    <Wrapper>
      <Search
        placeholder={props.placeholder}
        address={props.address}
        setAddress={(address) => {
          props.setPlace({
            latitude: address.geometry.coordinates[1],
            longitude: address.geometry.coordinates[0],
            address: address.place_name_fr,
          })
        }}
      />
    </Wrapper>
  )
}
