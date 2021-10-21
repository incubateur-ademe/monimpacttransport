import React, { useContext } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

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
  margin-left: 0.2rem;
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
    background-color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.ter};
    border-radius: 1.5rem;
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
const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  font-weight: bold;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 1rem;
  border: none;
`
export default function Uncertainty(props) {
  const { uncertainty, setUncertainty } = useContext(TransportationContext)
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)

  const { setRadiativeForcing } = useContext(ModalContext)

  return props.transportation.uncertainty ? (
    <>
      <Display onClick={() => setConfiguratorOpen(true)}>
        <>
          <Plus data-tip={'Impact des trainées'} data-for='uncertainty'>
            +
          </Plus>
          <ReactTooltip id='uncertainty' />
        </>
      </Display>
      <Wrapper open={configuratorOpen}>
        {configuratorOpen && (
          <ButtonClose
            onClick={() => {
              setConfiguratorOpen(false)
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
