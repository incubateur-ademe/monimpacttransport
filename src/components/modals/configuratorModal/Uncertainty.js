import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'

const Wrapper = styled(Checkbox)`
  margin: 0 -1rem 1rem;
  font-size: 0.875rem;
`
const RadiativeForcing = styled.a`
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  cursor: pointer;
`
export default function Uncertainty() {
  const { uncertainty, setUncertainty } = useContext(TransportationContext)

  const { setRadiativeForcing } = useContext(ModalContext)

  return (
    <Wrapper
      checked={uncertainty}
      onChange={(checked) => setUncertainty(checked)}
      small
    >
      prendre en compte l'
      <RadiativeForcing
        onClick={(e) => {
          e.stopPropagation()
          setRadiativeForcing(true)
        }}
      >
        impact des traînées
      </RadiativeForcing>
    </Wrapper>
  )
}
