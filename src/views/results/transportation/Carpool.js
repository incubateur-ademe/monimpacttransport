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
  padding: 0.4rem;
  cursor: pointer;
  transition: opacity 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.second};
    border-radius: 1.5rem;
    transition: background-color 200ms ease-out;
  }

  &:hover {
    &:before {
      background-color: ${(props) => props.theme.colors.secondLight};
    }
  }

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Carpoolers = styled.div`
  display: flex;
`
const Carpooler = styled(Emoji)`
  position: relative;
  margin: 0 0.2rem;
`
export default function Carpool(props) {
  const { setCarpool } = useContext(TransportationContext)

  return props.transportation.carpoolers ? (
    <>
      <Wrapper
        onClick={() => setCarpool(false)}
        data-tip={'Cacher le covoiturage'}
        data-for='carpool'
      >
        <Carpoolers>
          {[...Array(props.transportation.carpoolers)].map(
            (carpooler, index) => (
              <Carpooler key={index}>🧑</Carpooler>
            )
          )}
        </Carpoolers>
      </Wrapper>
      <ReactTooltip id='carpool' />
    </>
  ) : null
}
