import React, { useContext } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import TransportationContext from 'utils/TransportationContext'
import ButtonClose from './ButtonClose'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  margin-left: 0.4rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 1.5rem;
  transition: background-color 200ms ease-out;

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Carpoolers = styled.div`
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  white-space: nowrap;
`
export default function Carpool(props) {
  const { setCarpool } = useContext(TransportationContext)

  return props.transportation.carpoolers ? (
    <>
      <Wrapper>
        <Carpoolers
          data-tip={
            'Seulement si ces covoitureurs évitent de faire le même trajet avec un véhicule équivalent'
          }
          data-for='carpool'
        >
          avec {props.transportation.carpoolers - 1} covoitureur
          {props.transportation.carpoolers > 2 ? 's' : ''}
        </Carpoolers>
        <ButtonClose onClick={() => setCarpool(false)} />
      </Wrapper>
      <ReactTooltip id='carpool' />
    </>
  ) : null
}
