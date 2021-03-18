import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { approximation, setApproximation } = useContext(ModalContext)

  return (
    <Modal open={approximation} setOpen={setApproximation}>
      <Title>Mode Itinéraire</Title>
      <Text>
        Lorsque vous ne connaissez pas directement le kilométrage, le mode
        itinéraire vous permet d'estimer la distance entre deux points.
      </Text>
      <Text>
        Calculée à vol d'oiseau, cette distance est identique pour tous les
        modes de déplacement et ne correspond pas à la réalité des transports
        disponibles sur ce trajet.
      </Text>
    </Modal>
  )
}
