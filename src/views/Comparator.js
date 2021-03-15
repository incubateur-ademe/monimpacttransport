import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Button from 'components/base/Button'
import Search from './comparator/Search'
import Results from './comparator/Results'

const Buttonwrapper = styled.div`
  display: none;
  justify-content: center;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    display: flex;
  }
`
const Disclaimer = styled.p`
  margin: 0 0 1rem 3.5rem;

  ${(props) => props.theme.mq.small} {
    margin: 0 0 1rem;
  }
`
export default function Comparator() {
  const { setConfigurator } = useContext(ModalContext)
  const { mode } = useContext(SearchContext)

  return (
    <>
      <Search />
      <Results />
      <Buttonwrapper>
        <Button onClick={() => setConfigurator(true)}>Personnaliser</Button>
      </Buttonwrapper>
      {mode === 'itinerary' && (
        <Disclaimer>
          Les distances données par le mode itinéraire sont calculées à vol
          d'oiseau et ne correspondent pas à la réalité des transports.
        </Disclaimer>
      )}
      <Disclaimer>
        Sont inclus les émissions directes, et la production et distribution de
        carburant et d'électricité. La construction des véhicules (voiture,
        vélo, batterie, train, avion...) et des infrastructures (routes, rails,
        aéroports...) n'est pas incluse.
      </Disclaimer>
    </>
  )
}
