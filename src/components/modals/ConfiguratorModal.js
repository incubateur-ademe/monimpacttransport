import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import TransportationContext from 'utils/TransportationContext'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'
import Carpool from './configuratorModal/Carpool'
import Uncertainty from './configuratorModal/Uncertainty'
import TransportationList from 'components/misc/configurator/TransportationList'

const StyledModal = styled(Modal)`
  display: none;

  ${(props) => props.theme.mq.medium} {
    display: flex;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(90vh - 4rem);
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
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)
  const { reset } = useContext(TransportationContext)

  return (
    <StyledModal
      open={configuratorOpen}
      setOpen={setConfiguratorOpen}
      width='45em'
    >
      <Wrapper>
        <Title>Personnaliser l'Affichage</Title>
        <TransportationList modal />
        <Flex>
          <Carpool />
          <Uncertainty />
        </Flex>
        <ButtonWrapper>
          <Button onClick={reset} hollow small>
            Réinitialiser
          </Button>
          <Button onClick={() => setConfiguratorOpen(false)} small>
            Valider
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </StyledModal>
  )
}
