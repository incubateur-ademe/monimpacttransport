import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import TransportationList from './configurator/TransportationList'
import ButtonClose from './configurator/ButtonClose'

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  width: ${(props) => (props.open ? '30rem' : 0)};
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Content = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 30rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border-right: 5px solid ${(props) => props.theme.colors.main};
  overflow-y: auto;
  overflow-x: visible;
  transform: translateX(${(props) => (props.open ? 0 : '-100%')});
  transition: all 400ms ease-out;
`
export default function Configurator() {
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)
  return null
  return (
    <Wrapper open={configuratorOpen}>
      <ButtonClose
        onClick={() => {
          setConfiguratorOpen((prevConfigurator) => !prevConfigurator)
        }}
        open={configuratorOpen}
      />
      <Content open={configuratorOpen}>
        <TransportationList />
      </Content>
    </Wrapper>
  )
}
