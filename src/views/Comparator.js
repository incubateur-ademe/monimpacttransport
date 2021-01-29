import React, { useContext } from 'react'
import styled from 'styled-components'
import ModalContext from 'utils/ModalContext'

import Button from '@bit/datagir.simulateurs.button'
import Search from './comparator/Search'
import Results from './comparator/Results'

const Wrapper = styled.div`
  position: relative;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function Comparator() {
  const { setConfigurator } = useContext(ModalContext)
  return (
    <Wrapper>
      <Search />
      <Results />
      <ButtonWrapper>
        <Button color={'text'} onClick={() => setConfigurator(true)}>
          Personnaliser mes résultats
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}
