import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const Wrapper = styled.svg`
  width: 1.75em;
  height: auto;
  margin-bottom: 0.1rem;
  opacity: ${(props) => (props.checked ? 1 : 0.3)};
  cursor: pointer;
  transition: opacity 200ms ease-out;

  &:hover {
    opacity: ${(props) => (props.checked ? 1 : 0.6)};
  }

  path {
    fill: ${(props) => props.theme.colors.main};
  }
`
export default function Lock(props) {
  return (
    <>
      <Wrapper
        data-tip={
          props.checked
            ? `N'afficher le mode de transport<br/>que s'il est pertinent<br/>par rapport à la distance`
            : 'Afficher en permanence le mode de transport,<br />peu importe la distance'
        }
        data-multiline={true}
        x='0px'
        y='0px'
        viewBox='0 0 512 512'
        checked={props.checked}
        onClick={props.onClick}
      >
        <path d='M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32    C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333    V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292    c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51    c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667    c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64    s85.333,38.281,85.333,85.333V192z' />
      </Wrapper>
      <ReactTooltip place='left' />
    </>
  )
}
