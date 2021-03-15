import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const Start = styled.div``
const End = styled.div``
const Middle = styled.div``
const Input = styled.input`
  position: relative;
  z-index: 10;
  width: ${(props) => props.width * 0.63 + 1.2}em;
  max-width: 5.625em;
  padding: 0.3em 0.6em;
  font-weight: 900;
  font-family: 'Fira Code', monospace;
  color: ${(props) => props.theme.colors.text};
  color: ${(props) =>
    props.theme.colors[props.theme.name === 'Défaut' ? 'text' : 'second']};
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 0.75em;
  box-shadow: 0 0.5px 12.4px rgba(0, 0, 0, 0.215),
    0 1.3px 22.7px rgba(0, 0, 0, 0.286), 0 3px 36.1px rgba(0, 0, 0, 0.344),
    0 10px 80px rgba(0, 0, 0, 0.5);
  transition: box-shadow 300ms ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0.5px 12.4px rgba(0, 0, 0, 0.322),
      0 1.3px 22.7px rgba(0, 0, 0, 0.429), 0 3px 36.1px rgba(0, 0, 0, 0.516),
      0 10px 80px rgba(0, 0, 0, 0.75);
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
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  return (
    <Wrapper>
      <Start
        dangerouslySetInnerHTML={{
          __html: `Quand je parcours&nbsp;`,
        }}
      />
      <Middle>
        <Input
          type='number'
          value={km}
          width={String(km).length}
          onChange={(e) => setKm(e.target.value)}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: `&nbsp;km`,
          }}
        />
      </Middle>
      <End
        dangerouslySetInnerHTML={{
          __html: `&nbsp;j'emets`,
        }}
      />
    </Wrapper>
  )
}
