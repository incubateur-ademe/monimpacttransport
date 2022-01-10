import React, { useState, useEffect } from 'react'
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
  const setCoordinates = props.setCoordinates
  useEffect(() => {
    place?.result?.geometry?.location &&
      setCoordinates({
        latitude: place.result.geometry.location.lat,
        longitude: place.result.geometry.location.lng,
      })
  }, [place, setCoordinates])
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
