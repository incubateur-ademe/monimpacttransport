import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 0.3em 0.6em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  color: ${(props) =>
    props.theme.colors[props.theme.name === 'Défaut' ? 'text' : 'second']};
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`
export default function TextInput(props) {
  return (
    <Wrapper
      className={props.className}
      type={props.type}
      value={props.value}
      width={String(props.value).length}
      onChange={(e) => props.onChange(e.target.value)}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}
