import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import api from 'utils/api'
import UXContext from 'utils/UXContext'
import useDebounce from 'hooks/useDebounce'
import TextInput from './address/TextInput'
import Suggestions from './address/Suggestions'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
`
const Title = styled.h4`
  margin-bottom: 0.5rem;
`
const Search = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => props.theme.colors.main};
  border-radius: 0.75em;

  ${(props) => props.theme.mq.small} {
    border: 3px solid ${(props) => props.theme.colors.main};
  }
`
export default function Address(props) {
  const { setCenter } = useContext(UXContext)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 2) {
      api
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearch}.json?proximity=2.3488,48.8534&language=fr&access_token=${process.env.REACT_APP_MAPBOX_API_TOKEN}`
        )
        .then((res) => setSuggestions(res.features || []))
    } else {
      setSuggestions([])
    }
  }, [debouncedSearch])

  const [focus, setFocus] = useState(false)

  let timer = null

  return (
    <Wrapper>
      <Title>Centre de la carte</Title>
      <Search>
        <TextInput
          name={'address'}
          autoComplete='off'
          value={search}
          onChange={(value) => {
            setSearch(value)
          }}
          onFocus={() => {
            clearTimeout(timer)
            setFocus(true)
          }}
          onBlur={() => {
            clearTimeout(timer)
            timer = setTimeout(() => setFocus(false), 100)
          }}
        />
        <Suggestions
          suggestions={suggestions}
          focus={focus}
          setFocus={(value) => {
            clearTimeout(timer)
            setFocus(value)
          }}
          onChange={(suggestion) => {
            console.log(suggestion)
            setSearch(suggestion.place_name_fr)
            setCenter({
              long: suggestion.center[0],
              lat: suggestion.center[1],
            })
          }}
        />
      </Search>
    </Wrapper>
  )
}
