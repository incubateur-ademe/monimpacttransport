import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
  position: relative;
  z-index: 10;
  width: ${(props) => props.width * 0.63 + 0.6}em;
  max-width: 6em;
  margin: 0 0.3em;
  padding: 0.1em 0.3em;
  font-weight: 900;
  font-family: 'Fira Code', monospace;
  color: ${(props) => props.theme.colors.text};
  color: ${(props) =>
    props.theme.colors[props.theme.name === 'Défaut' ? 'text' : 'second']};
  background-color: ${(props) => props.theme.colors.main};
  border: none;

  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
export default function TextInput(props) {
  return (
    <Wrapper
      type={props.type}
      value={props.value}
      width={String(props.value).length}
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}
