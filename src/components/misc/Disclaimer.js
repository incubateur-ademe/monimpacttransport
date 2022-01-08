import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 3rem;
  font-weight: 300;
  text-align: center;
`
export default function Disclaimer(props) {
  return (
    <Wrapper>
      {props.itinerary && (
        <p>
          Les distances et modes de transport sont donnés à titre indicatif et
          ne correspondent pas forcement à la réalité. Les destinations de
          départ et d'arrivée doivent être situées en France métropolitaine.
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
