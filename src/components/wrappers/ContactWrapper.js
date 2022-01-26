import React from 'react'

import Contact from 'components/layout/Contact'

export default function ContactWrapper(props) {
  return (
    <Contact
      small={props.small}
      options={[
        {
          value: 'Transport Manquant',
          label: 'Il manque un mode de transport',
          disclaimer: `Ce simulateur n'est qu'une illustration des différences entre les principaux modes de transport et n'a pas pour objectif d'être exhaustif. Les données des modes de transport suivant n'existent pas encore : <br/><br/>- Véhicule hydrogène<br/><br/>- Ferry<br/><br/>- Bateau à moteur<br/><br/>- Scooter et moto légère (électrique)<br/><br/>- Camping Car<br/><br/>`,
        },
        {
          value: 'Imprecision',
          label: `Le calcul n'est pas assez précis`,
          disclaimer: `Ce simulateur propose un calcul simplifié afin de donner une idée d'ordre de grandeur. Réalisez votre bilan carbone sur Nos Gestes Climat afin d'obtenir un résultat plus précis.`,
        },
      ]}
    />
  )
}
