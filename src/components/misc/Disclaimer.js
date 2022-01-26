import React from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'

const Wrapper = styled.div`
  margin-top: 3rem;
  font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  font-weight: 300;
  text-align: center;
`
export default function Disclaimer(props) {
  const iframe = useIframe()

  return (
    <Wrapper iframe={iframe}>
      {props.itinerary && (
        <p>
          Les distances et modes de transport sont donnés à titre indicatif et
          ne correspondent pas forcement à la réalité.
        </p>
      )}
      <p>
        <strong>Équivalent CO₂ par personne en France.</strong> Sont incluses
        les émissions directes, et la production et distribution de carburant et
        d'électricité. <strong>La construction des véhicules</strong> (voiture,
        vélo, batterie, train, avion...) <strong>et des infrastructures</strong>{' '}
        (routes, rails, aéroports...) <strong>n'est pas incluse.</strong>
      </p>
    </Wrapper>
  )
}
