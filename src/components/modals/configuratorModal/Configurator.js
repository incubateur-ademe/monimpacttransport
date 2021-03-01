import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'

import Transportation from './configurator/Transportation'

const Wrapper = styled.div`
  overflow-y: scroll;
  margin-bottom: 1rem;
`
const Table = styled.table`
  width: 100%;
  font-size: 0.875em;
  border-spacing: 0;
`
const Head = styled.tr``
const HeadCell = styled.th`
  padding: 0 1rem 1rem;

  ${(props) => props.theme.mq.small} {
    padding: 0 0.25rem 1rem;
  }
`

export default function Configurator() {
  const {
    transportations,
    transportationsVisibles,
    transportationsAlwaysVisibles,
    toggleAlwaysVisible,
    toggleVisible,
  } = useContext(TransportationContext)

  return (
    <Wrapper>
      <Table>
        <thead>
          <Head>
            <HeadCell></HeadCell>
            <HeadCell>Visible</HeadCell>
            <HeadCell>Toujours</HeadCell>
          </Head>
        </thead>
        <tbody>
          {transportations.map((transportation) => (
            <Transportation
              transportation={transportation}
              transportationsVisibles={transportationsVisibles}
              toggleVisible={toggleVisible}
              transportationsAlwaysVisibles={transportationsAlwaysVisibles}
              toggleAlwaysVisible={toggleAlwaysVisible}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}
