import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      title='Mon Impact Transport'
      message={`Découvrez et comparez facilement l'impact des déplacements sur l'environnement !`}
    />
  )
}
