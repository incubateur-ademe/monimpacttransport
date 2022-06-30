import React, { useContext } from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import TransportationContext from 'utils/TransportationContext'

const Wrapper = styled.div`
  margin-top: 3rem;
  font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  font-weight: 300;
  text-align: center;
`
export default function Disclaimer(props) {
  const iframe = useIframe()

  const { construction } = useContext(TransportationContext)

  return (
    <Wrapper iframe={iframe}>
      {props.itinerary && (
        <p>
          Les distances et modes de transport sont donnés à titre indicatif et
          ne correspondent pas forcement à la réalité.
        </p>
      )}
      {construction && !props.itinerary && (
        <p>
          Seul les véhicules dont l'impact de la construction est connu sont
          affichés.
        </p>
      )}
      <p>
        <strong>Équivalent CO₂ par personne en France.</strong> Sont incluses
        les émissions directes, et la production et distribution de carburant et
        d'électricité. <strong>La construction des</strong>
        {construction ? (
          ''
        ) : (
          <>
            <strong> véhicules</strong> (voiture, vélo, batterie, train,
            avion...) <strong>et des</strong>
          </>
        )}
        <strong> infrastructures</strong> (routes, rails, aéroports...){' '}
        <strong>n'est pas incluse.</strong>
      </p>
    </Wrapper>
  )
}
