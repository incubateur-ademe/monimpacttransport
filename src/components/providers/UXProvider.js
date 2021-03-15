import React, { useState } from 'react'
import { useQueryParam, BooleanParam, withDefault } from 'use-query-params'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Mes Fruits et Légumes de Saison')

  const [configuratorOpen, setConfiguratorOpen] = useState(false)

  const [map, setMap] = useQueryParam('map', withDefault(BooleanParam, true))

  return (
    <UXContext.Provider
      value={{
        configuratorOpen,
        setConfiguratorOpen,
        map,
        setMap,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
