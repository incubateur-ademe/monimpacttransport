import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: 1.75rem;
  height: auto;
  opacity: ${(props) => (props.checked ? 1 : 0.3)};
  cursor: pointer;
  transition: opacity 200ms ease-out;

  &:hover {
    opacity: ${(props) => (props.checked ? 1 : 0.6)};
  }

  path,
  circle {
    fill: ${(props) => props.theme.colors.main};
  }
`
export default function Visible(props) {
  return (
    <Wrapper
      x='0px'
      y='0px'
      width='932.15px'
      height='932.15px'
      viewBox='0 0 932.15 932.15'
      checked={props.checked}
      onClick={props.onClick}
    >
      <path d='M466.075,161.525c-205.6,0-382.8,121.2-464.2,296.1c-2.5,5.3-2.5,11.5,0,16.9c81.4,174.899,258.601,296.1,464.2,296.1   s382.8-121.2,464.2-296.1c2.5-5.3,2.5-11.5,0-16.9C848.875,282.725,671.675,161.525,466.075,161.525z M466.075,676.226   c-116.1,0-210.1-94.101-210.1-210.101c0-116.1,94.1-210.1,210.1-210.1c116.1,0,210.1,94.1,210.1,210.1   S582.075,676.226,466.075,676.226z' />
      <circle cx='466.075' cy='466.025' r='134.5' />
    </Wrapper>
  )
}
