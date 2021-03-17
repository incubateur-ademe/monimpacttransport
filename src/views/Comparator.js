import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Button from 'components/base/Button'
import Search from './comparator/Search'
import Results from './comparator/Results'

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`
const Disclaimer = styled.p`
  margin: 0 0 1rem;
`
export default function Comparator() {
  const { setConfigurator } = useContext(ModalContext)
  const { mode } = useContext(SearchContext)

  return (
    <>
      <Search />
      <Results />
      <Buttonwrapper>
        <Button
          onClick={() => {
            window._paq &&
              window._paq.push(['trackEvent', 'configurator', 'toggle', true])
            setConfigurator(true)
          }}
        >
          Voir tous les modes de transport
        </Button>
      </Buttonwrapper>
      {mode === 'itinerary' && (
        <Disclaimer>
          Les distances données par le mode itinéraire sont calculées à vol
          d'oiseau et ne correspondent pas à la réalité des transports.
        </Disclaimer>
      )}
      <Disclaimer>
        Équivalent CO₂ par personne en France. Sont inclus les émissions
        directes, et la production et distribution de carburant et
        d'électricité. La construction des véhicules (voiture, vélo, batterie,
        train, avion...) et des infrastructures (routes, rails, aéroports...)
        n'est pas incluse.
      </Disclaimer>
    </>
  )
}
