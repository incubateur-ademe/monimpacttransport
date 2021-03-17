import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'
import ButtonClose from './ButtonClose'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  margin-left: 0.5rem;
  padding: 0.5875rem 0.8rem 0.6375rem 1rem;
  color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
  cursor: default;
  transition: opacity 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.quad};
    border: 2px solid ${(props) => props.theme.colors.main};
    border-radius: 1.5rem;
    box-shadow: 0 1.6px 9px rgba(0, 0, 0, 0.239),
      0 3.9px 24.8px rgba(0, 0, 0, 0.284), 0 7.5px 59.7px rgba(0, 0, 0, 0.303),
      0 17px 198px rgba(0, 0, 0, 0.34);
  }
`
const StyledCheckbox = styled(Checkbox)`
  display: flex;
  &:before {
    border-color: ${(props) => props.theme.colors.text};
  }

  &:after {
    color: ${(props) => props.theme.colors.text};
  }
`
const RadiativeForcing = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: underline;
  cursor: pointer;
`
const Display = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  margin-left: 0.25rem;
`
const Plus = styled.sup`
  font-weight: 900;
  color: ${(props) => props.theme.colors.main};
  background-color: transparent;
  border: none;
`
export default function Uncertainty(props) {
  const { uncertainty, setUncertainty } = useContext(TransportationContext)
  const { configuratorOpen } = useContext(UXContext)

  const { configurator, setConfigurator, setRadiativeForcing } = useContext(
    ModalContext
  )

  return props.transportation.uncertainty ? (
    <>
      <Display onClick={() => setConfigurator(true)}>
        <Plus>+</Plus>
      </Display>
      <Wrapper open={configurator || configuratorOpen}>
        {configurator && (
          <ButtonClose
            onClick={() => {
              setConfigurator(false)
            }}
          />
        )}
        <StyledCheckbox
          checked={uncertainty}
          onChange={(checked) => setUncertainty(checked)}
        >
          Impact des traînées{' '}
          <RadiativeForcing
            onClick={(e) => {
              e.stopPropagation()
              setRadiativeForcing(true)
            }}
          >
            (?)
          </RadiativeForcing>
        </StyledCheckbox>
      </Wrapper>
    </>
  ) : null
}
