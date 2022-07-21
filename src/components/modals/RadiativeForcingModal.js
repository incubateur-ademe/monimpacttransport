import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { radiativeForcing, setRadiativeForcing } = useContext(ModalContext)

  return (
    <Modal open={radiativeForcing} setOpen={setRadiativeForcing}>
      <Title>Incertitude du à l'impact des traînées</Title>
      <Text>
        Du fait que les avions volent à haute altitude, la combustion du
        kérosène crée des traînées et perturbe les cycles d’autres gaz à effet
        de serre que le CO2 (vapeur d'eau, eau condensée sous diverses formes,
        NOx et méthane qui, ensemble, produisent de l'ozone, etc.). Cet impact
        est appelé forçage radiatif additionnel. Dans l'
        <MagicLink to='https://www.ecologie.gouv.fr/information-ges-des-prestations-transport'>
          Information GES des prestations de transport réglementaire
        </MagicLink>
        , cet impact n'est pas inclus mais il est recommandé dans la
        réglementation pour la réalisation des Bilans GES des organisations.
      </Text>
    </Modal>
  )
}
