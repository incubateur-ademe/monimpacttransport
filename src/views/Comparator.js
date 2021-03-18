import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Button from 'components/base/Button'
import Search from './comparator/Search'
import Results from './comparator/Results'

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`
const Disclaimer = styled.p`
  max-width: 30rem;
  margin: 0 auto 1rem;
`
export default function Comparator(props) {
  const { setConfigurator } = useContext(ModalContext)

  return (
    <>
      <Search iframe={props.iframe} />
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
      <Disclaimer>
        Équivalent CO₂ par personne en France. Sont inclus les émissions
        directes, et la production et distribution de carburant et
        d'électricité. La construction des véhicules (voiture, vélo, batterie,
        train, avion...) et des infrastructures (routes, rails, aéroports...)
        n'est pas incluse.
      </Disclaimer>
      <Disclaimer>
        Les distances données par le mode itinéraire sont calculées à vol
        d'oiseau et ne correspondent pas à la réalité des transports.
      </Disclaimer>
    </>
  )
}
