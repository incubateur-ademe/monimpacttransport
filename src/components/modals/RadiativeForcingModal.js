import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { radiativeForcing, setRadiativeForcing } = useContext(ModalContext)

  return (
    <Modal open={radiativeForcing} setOpen={setRadiativeForcing}>
      <Title>Impact des traînées</Title>
      <Text>
        Du fait que les avions volent à haute altitude, la combustion du kérosène
        crée des traînées et perturbe les cycles d’autres gaz à effet de serre que
        le CO2 (vapeur d'eau, eau condensée sous diverses formes, NOx et méthane qui,
        ensemble, produisent de l'ozone, etc.) : c'est cet impact additionnel (dit 
        forçage radiatif additionnel) qui est pris en compte lorsque la case est cochée.
      </Text>
    </Modal>
  )
}
