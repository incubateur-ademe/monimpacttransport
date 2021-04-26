import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      title='Mes Fruits et Légumes de Saison'
      message={`Découvrez quels sont les fruits et légumes de saison pour consommer des produits frais et locaux toute l'année ! En plus c'est meilleur pour votre santé et pour l'environnement !`}
    />
  )
}
