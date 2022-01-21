import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'

import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { radiativeForcing, setRadiativeForcing } = useContext(ModalContext)

  const { uncertainty, setUncertainty } = useContext(TransportationContext)

  return (
    <Modal open={radiativeForcing} setOpen={setRadiativeForcing}>
      <Title>Impact des traînées</Title>
      <Text>
        Du fait que les avions volent à haute altitude, la combustion du
        kérosène crée des traînées et perturbe les cycles d’autres gaz à effet
        de serre que le CO2 (vapeur d'eau, eau condensée sous diverses formes,
        NOx et méthane qui, ensemble, produisent de l'ozone, etc.). Cet impact
        est appelé forçage radiatif additionnel.
      </Text>
      <Checkbox
        name='trainées'
        checked={uncertainty}
        onChange={(checked) => setUncertainty(checked)}
      >
        Afficher l'impact des traînées
      </Checkbox>
    </Modal>
  )
}
