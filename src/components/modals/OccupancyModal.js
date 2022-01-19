import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function Occupancy() {
  const { occupancy: open, setOccupancy: setOpen } = useContext(ModalContext)
  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>Taux de remplissage des véhicules</Title>
      <Text>
        L'impact de chaque véhicule est donné "par personne", et non pas pour
        l'ensemble du véhicule.
      </Text>
      <Text>
        Nous prenons les taux de remplissage moyen préconisés par l'ADEME, sauf
        pour les voitures (thermique et électrique) ou nous ne comptons qu'une
        seule personne dans le véhicule.
      </Text>
    </Modal>
  )
}
