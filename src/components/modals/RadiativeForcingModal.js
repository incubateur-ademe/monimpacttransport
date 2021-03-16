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
        L'impact de l'avion ne se limite pas aux émissions de CO2 dues à la
        combustion du kérosène pour à sa fabrication, mais il implique d'autres
        effets liées aux traînées, émissions d'autres particules NOx, etc. On
        peut alors utiliser le forçage radiatif pour mesurer tous les effets. A
        ce jour il existe une grande incertitude quant à ces effets (facteur x2,
        x3...). Des recherches sont menées pour préciser encore ces impacts.
      </Text>
    </Modal>
  )
}
