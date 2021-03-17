import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import api from 'utils/api'
import SearchContext from 'utils/SearchContext'
import useDebounce from 'hooks/useDebounce'
import TextInput from 'components/base/TextInput'
import Suggestions from './address/Suggestions'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 1.5rem ${(props) => (props.type === 'from' ? '5rem' : '10rem')};
  padding: calc(0.3em + 2px) 0;
  line-height: 1.15;

  ${(props) => props.theme.mq.small} {
    margin: 0 0 ${(props) => (props.type === 'from' ? '1.5rem' : '2rem')} 0;
  }
`
const InputWrapper = styled.div`
  position: absolute;
  z-index: ${(props) => (props.type === 'from' ? '101' : '100')};
  top: 0;
  left: 100%;
  width: 33rem;
  background-color: ${(props) => props.theme.colors.quad};
  border: 2px solid ${(props) => props.theme.colors.main};
  border-radius: 0.75em;
  box-shadow: ${(props) =>
    props.focus
      ? `0 0.5px 12.4px rgba(0, 0, 0, 0.266),
      0 1.3px 22.7px rgba(0, 0, 0, 0.354), 0 3px 36.1px rgba(0, 0, 0, 0.427),
      0 10px 80px rgba(0, 0, 0, 0.62)`
      : `0 0.5px 12.4px rgba(0, 0, 0, 0.15),
    0 1.3px 22.7px rgba(0, 0, 0, 0.22), 0 3px 36.1px rgba(0, 0, 0, 0.3),
    0 10px 80px rgba(0, 0, 0, 0.4)`};
  transition: box-shadow 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    width: calc(
      100vw - ${(props) => (props.type === 'from' ? '4rem' : '3rem')}
    );
  }
`
const Input = styled(TextInput)``
const Km = styled.div`
  position: absolute;
  top: 100%;
  right: 0.7em;

  span {
    font-size: 0.875rem;

    ${(props) => props.theme.mq.small} {
      font-size: 0.75rem;
    }
  }
`
export default function Address(props) {
  const { km, itinerary, setItinerary } = useContext(SearchContext)
  const [search, setSearch] = useState(itinerary[props.type])
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
    <Wrapper className={props.className} type={props.type}>
      <span
        dangerouslySetInnerHTML={{
          __html: `${props.type === 'from' ? 'de' : 'à'}&nbsp;`,
        }}
      />
      <InputWrapper type={props.type}>
        {props.type === 'to' && (
          <Km>
            <span>({km}km à vol d'oiseau)</span>
          </Km>
        )}
        <Input
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
            window._paq &&
              window._paq.push([
                'trackEvent',
                'itinerary',
                'change',
                props.type,
              ])
            setSearch(suggestion.place_name_fr)
            setItinerary({
              [props.type]: suggestion.place_name_fr,
              [props.type + 'Longitude']: suggestion.center[0],
              [props.type + 'Latitude']: suggestion.center[1],
            })
          }}
        />
      </InputWrapper>
    </Wrapper>
  )
}
