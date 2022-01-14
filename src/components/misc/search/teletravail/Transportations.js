import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import Transportation from './transportations/Transportation'

const Wrapper = styled.div`
  margin: 1rem auto 2rem;
`
const List = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`
const MoreButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.375rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.main : 'transparent'};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 200ms ease-out;
`
const Result = styled.div`
  font-weight: 300;
  text-align: center;
`
export default function Transportations() {
  const { itineraryTransportations: transportations } = useContext(
    TransportationContext
  )
  const { start, end, teletravailTransportation } = useContext(SearchContext)

  return (
    start &&
    end && (
      <Wrapper>
        <List>
          {transportations
            .filter(
              (transportation) =>
                transportation.default && !transportation.carpool
            )
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((transportation) => (
              <Transportation transportation={transportation} />
            ))}
          <MoreButton />
        </List>
        <Result>
          {transportations.find(
            (transportation) => transportation.id === teletravailTransportation
          )?.label.fr || 'Choisissez votre mode de transport'}
        </Result>
      </Wrapper>
    )
  )
}
