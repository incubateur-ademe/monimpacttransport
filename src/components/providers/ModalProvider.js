import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [radiativeForcing, setRadiativeForcing] = useState(false)
  const [installInstructions, setInstallInstructions] = useState(false)
  const [source, setSource] = useState(false)
  const [teletravail, setTeletravail] = useState(false)
  const [footprint, setFootprint] = useState(false)
  const [occupancy, setOccupancy] = useState(false)
  const [survey, setSurvey] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        radiativeForcing,
        setRadiativeForcing,
        installInstructions,
        setInstallInstructions,
        source,
        setSource,
        teletravail,
        setTeletravail,
        footprint,
        setFootprint,
        occupancy,
        setOccupancy,
        survey,
        setSurvey,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
