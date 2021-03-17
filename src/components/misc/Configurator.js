import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import UXContext from 'utils/UXContext'
import TransportationList from './configurator/TransportationList'
import ButtonClose from './configurator/ButtonClose'

const Wrapper = styled.div`
  position: relative;
  display: ${(props) => (props.configuratorOpen ? 'none' : 'block')};
  width: ${(props) => (props.open ? '30rem' : 0)};
  color: ${(props) => props.theme.colors.main};

  box-shadow: 0 1.6px 6.8px rgba(0, 0, 0, 0.076),
    0 3.9px 18.8px rgba(0, 0, 0, 0.095), 0 7.5px 45.2px rgba(0, 0, 0, 0.121),
    0 17px 150px rgba(0, 0, 0, 0.22);
  transition: all 400ms ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.second};
    opacity: 0.6;
  }
  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  border-left: 2px solid ${(props) => props.theme.colors.main};
  overflow-y: scroll;
  overflow-x: visible;
  transform: translateX(${(props) => (props.open ? 0 : '100%')});
  transition: all 400ms ease-out;
`
export default function Configurator() {
  const { configurator, setConfigurator } = useContext(ModalContext)

  const { configuratorOpen } = useContext(UXContext)

  return (
    <Wrapper open={configurator} configuratorOpen={configuratorOpen}>
      <ButtonClose
        onClick={() => {
          window._paq &&
            window._paq.push([
              'trackEvent',
              'configurator',
              'toggle',
              !configurator,
            ])
          setConfigurator((prevConfigurator) => !prevConfigurator)
        }}
        open={configurator}
      />
      <Content open={configurator}>
        <TransportationList />
      </Content>
    </Wrapper>
  )
}
