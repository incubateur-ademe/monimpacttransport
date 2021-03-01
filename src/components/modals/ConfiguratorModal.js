import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'
import Carpool from './configuratorModal/Carpool'
import Uncertainty from './configuratorModal/Uncertainty'
import Configurator from './configuratorModal/Configurator'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(90vh - 3rem);
`
const Title = styled.h2``
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  > button {
    margin: 0 0.5rem;
  }
`
export default function ConfiguratorModal() {
  const { configurator, setConfigurator } = useContext(ModalContext)
  const { reset } = useContext(TransportationContext)

  return (
    <Modal open={configurator} setOpen={setConfigurator} width='45em'>
      <Wrapper>
        <Title>Personnaliser l'Affichage</Title>
        <Configurator />
        <Flex>
          <Carpool />
          <Uncertainty />
        </Flex>
        <ButtonWrapper>
          <Button onClick={reset} hollow small>
            Réinitialiser
          </Button>
          <Button onClick={() => setConfigurator(false)} small>
            Valider
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  )
}
