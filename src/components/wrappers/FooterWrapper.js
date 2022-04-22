import React from 'react'

import MagicLink from 'components/base/MagicLink'
import Emoji from 'components/base/Emoji'
import Footer from 'components/layout/Footer'

export default function FooterWrapper() {
  return (
    <Footer>
      <h2>D'ou viennent ces données ?</h2>
      <p>
        Ce simulateur réutilise les données de la{' '}
        <MagicLink to='https://www.bilans-ges.ademe.fr/fr/accueil/contenu/index/page/presentation/siGras/0'>
          Base Carbone
        </MagicLink>
        . Il s’agit d’une{' '}
        <strong>base de données publique de facteurs d'émissions</strong>,
        nécessaires à la réalisation d’un bilan d’émissions de gaz à effet de
        serre (GES) et plus généralement tout exercice de comptabilité carbone.
      </p>
      <p>
        Les sources et calculs de chaque mode de transport sont précisés au clic
        sur le nom du mode de transport.
      </p>
      <p>
        <strong>Équivalent CO₂ par personne en France.</strong>
      </p>
      <p>
        <Emoji alt='Attention :'>⚠️</Emoji>{' '}
        <strong>
          Sont incluses les émissions directes, et la production et distribution
          de carburant et d'électricité.
        </strong>
        .
      </p>
      <p>
        <Emoji alt='Attention :'>⚠️</Emoji>{' '}
        <strong>La construction des véhicules</strong> (voiture, vélo, batterie,
        train, avion...) <strong>et des infrastructures</strong> (routes, rails,
        aéroports...) <strong>n'est pas incluse.</strong>
      </p>
      <p>
        Si vous souhaitez aller plus loin dans votre démarche, vous pouvez{' '}
        <strong>
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <MagicLink to={'https://nosgestesclimat.fr/'}>
            Nos Gestes Climat
          </MagicLink>
        </strong>
        .
      </p>
    </Footer>
  )
}
