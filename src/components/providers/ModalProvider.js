import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [radiativeForcing, setRadiativeForcing] = useState(false)
  const [approximation, setApproximation] = useState(false)
  const [installInstructions, setInstallInstructions] = useState(false)
  const [source, setSource] = useState(false)
  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        radiativeForcing,
        setRadiativeForcing,
        approximation,
        setApproximation,
        installInstructions,
        setInstallInstructions,
        source,
        setSource,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
