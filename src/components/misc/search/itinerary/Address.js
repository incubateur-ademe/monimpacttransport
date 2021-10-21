import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { useAddress } from 'hooks/useAddress'
import useDebounce from 'hooks/useDebounce'
import TextInput from './address/TextInput'
import Suggestions from './address/Suggestions'

const Wrapper = styled.form`
  position: absolute;
  z-index: 100;
  top: ${(props) => (props.addressSet ? '1rem' : '5rem')};
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 25rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.second};
  border-radius: 1.375rem;
  transition: box-shadow 200ms ease-out;
  transition: border 200ms ease-out, top 300ms ease-out;
  //overflow: hidden;

  ${(props) => props.theme.mq.small} {
    top: ${(props) => (props.addressSet ? '2.5rem' : '5rem')};
  }
`

export default function Address(props) {
  const [search, setSearch] = useState('')
  useEffect(() => {
    setSearch(props.address)
  }, [props.address])
  const debouncedSearch = useDebounce(search)

  const { data, isFetching } = useAddress(debouncedSearch)

  const [focus, setFocus] = useState(false)
  const input = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!focus) {
      setCurrent(0)
      input.current && input.current.blur()
    }
  }, [focus])

  const navigateToPlace = (place) => {
    if (place) {
      props.setAddress({
        label: place.properties.label,
        latitude: place.geometry.coordinates[1],
        longitude: place.geometry.coordinates[0],
      })
      props.setCenter([
        place.geometry.coordinates[1],
        place.geometry.coordinates[0],
      ])
      props.setZoom(13)
      setFocus(false)
    }
  }

  return (
    <Wrapper
      focus={focus}
      addressSet={props.address}
      onSubmit={(e) => {
        e.preventDefault()
        if (current > -1) {
          navigateToPlace(data[current])
        }
      }}
    >
      <TextInput
        ref={input}
        search={search}
        suggestion={data && data[current]}
        suggestionVisible={data && focus}
        isFetching={isFetching}
        setSearch={setSearch}
        setFocus={setFocus}
        navigateToPlace={navigateToPlace}
      />
      {data && focus && (
        <Suggestions
          search={debouncedSearch}
          results={data}
          focus={focus}
          current={current}
          isFetching={isFetching}
          setCurrent={setCurrent}
          handleSuggestionClick={navigateToPlace}
        />
      )}
    </Wrapper>
  )
}
