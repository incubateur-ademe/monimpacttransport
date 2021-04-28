import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  display: ${(props) => (props.focus ? 'block' : 'none')};
`
const Suggestion = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0.6em;
  text-align: left;
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 1rem;
  }
`
export default function Suggestions(props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(false)
  }, [props.suggestions])

  return (
    <Wrapper focus={props.focus} onScroll={() => setScrolled(true)}>
      {props.suggestions.map(
        (suggestion, index) =>
          (index < 10 || scrolled) && (
            <Suggestion
              key={suggestion.id}
              onClick={() => {
                props.onChange(suggestion)
                props.setFocus(false)
              }}
              onFocus={() => props.setFocus(true)}
              onBlur={() => props.setFocus(false)}
              type='button'
            >
              <span>{suggestion.place_name_fr}</span>
            </Suggestion>
          )
      )}
    </Wrapper>
  )
}
