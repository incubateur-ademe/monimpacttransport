import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      messages={{
        mail: {
          simulator: {
            subject: `Découvrez et intégrez le simulateur de l'ADEME Mon Impact Transport 🧭`,
            body: `Bonjour,

Vous souhaitez sensibiliser votre communauté ou collaborateurs et les aider à se tourner vers une mobilité moins émettrice en CO2 ?

Retrouvez l’impact de vos déplacements grâce au simulateur Mon Impact Transport !

Découvrez le ici : `,
          },
          result: {
            subject: `Découvre mon résultat sur le simulateur de l'ADEME Mon Impact Transport 🧭`,
            body: `Bonjour,

Voici un résultat de recherche sur le site Mon Impact Transport que je voulais partager avec toi : `,
          },
        },
        facebook: {
          simulator: {
            quote: `Découvrez l'impact de vos déplacements sur l'environnement !`,
          },
          result: {
            quote: `Découvrez l'impact de mon déplacement sur l'environnement ! `,
          },
        },
        twitter: {
          simulator: {
            title: `Découvrez l'impact de vos déplacements sur l'environnement !`,
          },
          result: {
            title: `Découvrez l'impact de mon déplacement sur l'environnement ! `,
          },
        },
        linkedin: {
          simulator: {
            source: 'Mon Impact Transport',
          },
          result: {
            source: `Mon Impact Transport`,
          },
        },
        whatsapp: {
          simulator: {
            title: `Découvrez l'impact de vos déplacements sur l'environnement !`,
          },
          result: {
            title: `Découvrez l'impact de mon déplacement sur l'environnement ! `,
          },
        },
      }}
    />
  )
}
