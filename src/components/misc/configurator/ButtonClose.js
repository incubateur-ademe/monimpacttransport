import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(${(props) => (props.open ? '30rem' : '0')}, -50%);
  padding: 0.7rem 0.9rem;
  background-color: ${(props) => props.theme.colors.main};
  border: 5px solid ${(props) => props.theme.colors.main};
  border-right: none;
  border-radius: 0 2rem 2rem 0;
  transition: all 400ms ease-out;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Settings = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 2.25rem;
  height: auto;
  opacity: ${(props) => (props.open ? 0 : 1)};
  transition: all 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
const Arrow = styled.svg`
  display: block;
  width: 2rem;
  height: auto;
  transform: rotate(180deg);
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
export default function ButtonClose(props) {
  return (
    <Wrapper open={props.open} onClick={props.onClick}>
      <Settings open={props.open} height='512' viewBox='0 0 24 24' width='512'>
        <path d='m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z' />
      </Settings>
      <Arrow
        open={props.open}
        x='0px'
        y='0px'
        width='46.02px'
        height='46.02px'
        viewBox='0 0 46.02 46.02'
      >
        <path d='M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z' />
      </Arrow>
    </Wrapper>
  )
}
