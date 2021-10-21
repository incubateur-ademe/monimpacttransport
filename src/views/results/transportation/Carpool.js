import React, { useContext } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import UXContext from 'utils/UXContext'
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
  margin-left: 0.2rem;
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
    background-color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.ter};
    border-radius: 1.5rem;
  }

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Title = styled.div`
  flex: 1;
  position: relative;
  margin: 0.1rem 0 0;
  color: ${(props) => props.theme.colors.text};
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
  border: 2px solid
    ${(props) => (props.active ? props.theme.colors.main : 'transparent')};
  border-radius: 1rem;
  cursor: pointer;
  transition: border 200ms ease-out;
`
const Plus = styled.div`
  margin-left: -0.1rem;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 0.8;
  color: ${(props) => props.theme.colors.main};
`
export default function Carpool(props) {
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)

  const { carpool, setCarpool } = useContext(TransportationContext)

  return props.transportation.carpool ? (
    <>
      <Display
        onClick={() => setConfiguratorOpen(true)}
        data-tip={'Ajouter un·e covoitureur·se'}
        data-for='carpool'
      >
        <Carpoolers>
          {[...Array(props.transportation.carpoolers)].map(
            (carpooler, index) => (
              <Carpooler small key={index}>
                🧑
              </Carpooler>
            )
          )}
          {props.transportation.carpoolers === 1 && <Plus>+</Plus>}
        </Carpoolers>
      </Display>
      <Wrapper open={configuratorOpen}>
        {configuratorOpen && (
          <ButtonClose
            onClick={() => {
              setConfiguratorOpen(false)
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

      <ReactTooltip id='carpool' />
    </>
  ) : null
}
