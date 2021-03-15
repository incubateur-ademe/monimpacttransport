import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Emoji from 'components/base/Emoji'
import ButtonClose from './ButtonClose'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  margin-left: 0.5rem;
  padding: 0.4rem 0.2rem 0.45rem 0.6rem;
  cursor: default;
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
  transition: opacity 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 1.5rem;
    box-shadow: 0 1.6px 9px rgba(0, 0, 0, 0.239),
      0 3.9px 24.8px rgba(0, 0, 0, 0.284), 0 7.5px 59.7px rgba(0, 0, 0, 0.303),
      0 17px 198px rgba(0, 0, 0, 0.34);
  }
`
const Title = styled.div`
  flex: 1;
  position: relative;
  margin: 0.1rem 0 0;
  color: ${(props) => props.theme.colors.quad};
  white-space: nowrap;
`
const Display = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
`
const Carpoolers = styled.div`
  display: flex;
  margin-left: 0.25rem;
`
const Carpooler = styled(Emoji)`
  position: relative;
  margin: 0 0.25rem;
  padding: ${(props) => (props.small ? 0 : '0.25rem')};
  // opacity: ${(props) => (props.active ? 1 : 0.5)};
  border: 2px solid
    ${(props) => (props.active ? props.theme.colors.quad : 'transparent')};
  border-radius: 1rem;
  cursor: pointer;
  transition: border 200ms ease-out;
`
export default function Carpool(props) {
  const { configurator, setConfigurator } = useContext(ModalContext)
  const { configuratorOpen } = useContext(UXContext)

  const { carpool, setCarpool } = useContext(TransportationContext)

  return props.transportation.carpool ? (
    <>
      <Display onClick={() => setConfigurator(true)}>
        <Carpoolers>
          {props.transportation.carpoolers > 1 &&
            [...Array(props.transportation.carpoolers)].map(
              (carpooler, index) => (
                <Carpooler small key={index}>
                  🧑
                </Carpooler>
              )
            )}
        </Carpoolers>
      </Display>
      <Wrapper open={configurator || configuratorOpen}>
        {configurator && (
          <ButtonClose
            onClick={() => {
              setConfigurator(false)
            }}
          />
        )}
        <Title>Covoiturage : </Title>
        <Carpoolers>
          {[...Array(props.transportation.carpool)].map((carpooler, index) => (
            <Carpooler
              key={index}
              index={index}
              onClick={() => {
                setCarpool(index + 1)
              }}
              active={index < carpool}
            >
              🧑
            </Carpooler>
          ))}
        </Carpoolers>
      </Wrapper>
    </>
  ) : null
}
