import React, { useState, useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import SearchContext from 'utils/SearchContext'

const flash = keyframes`
  from,
  75%,
  87.5%,
  to {
    opacity: 1;
  }

  81.25%,
  93.75% {
    opacity: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const Start = styled.div`
  ${(props) => props.theme.mq.small} {
    align-self: flex-start;
  }
`
const End = styled.div`
  ${(props) => props.theme.mq.small} {
    align-self: flex-end;
  }
`
const Middle = styled.div`
  ${(props) => props.theme.mq.small} {
    margin: 0.5rem 0 -0.5rem;
  }
`
const Input = styled.input`
  position: relative;
  z-index: 10;
  width: calc(${(props) => props.width * 0.6 + 1.2}em + 10px);
  max-width: 5.625em;
  padding: 0.15em 0.6em;
  font-weight: 900;
  font-family: 'Fira Code', monospace;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.background};
  border: 5px solid ${(props) => props.theme.colors.main};
  border-radius: 0.75em;
  animation: ${(props) => (props.pristine ? flash : 'none')} 4s infinite;

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

  ${(props) => props.theme.mq.small} {
    max-width: none;
    border: 3px solid ${(props) => props.theme.colors.main};
    width: calc(${(props) => props.width * 0.6 + 1.2}em + 6px);
  }
`
export default function Distance() {
  const { km, setKm } = useContext(SearchContext)

  const [pristine, setPristine] = useState(true)

  return (
    <Wrapper>
      <Start
        dangerouslySetInnerHTML={{
          __html: `Quand je parcours&nbsp;`,
        }}
      />
      <Middle>
        <Input
          type='text'
          inputmode='numeric'
          pattern='[0-9]*'
          value={km}
          width={String(km).length}
          onFocus={() => {
            setPristine(false)
            window._paq.push(['trackEvent', 'Distance', 'input', 'focus'])
          }}
          pristine={pristine}
          onChange={(e) => {
            window._paq &&
              window._paq.push(['trackEvent', 'Distance', 'input', 'change'])
            setKm(Number(e.target.value) || 0)
          }}
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
