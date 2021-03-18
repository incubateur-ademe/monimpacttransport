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
        Les distances données par le mode itinéraire sont calculées à vol
        d'oiseau et ne correspondent pas à la réalité des transports.
      </Text>
    </Modal>
  )
}
