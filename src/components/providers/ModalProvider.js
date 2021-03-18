import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [configurator, setConfigurator] = useState(false)
  const [radiativeForcing, setRadiativeForcing] = useState(false)
  const [approximation, setApproximation] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        configurator,
        setConfigurator,
        radiativeForcing,
        setRadiativeForcing,
        approximation,
        setApproximation,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
