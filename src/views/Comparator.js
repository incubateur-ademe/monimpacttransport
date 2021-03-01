import React, { useContext } from 'react'
import styled from 'styled-components'
import ModalContext from 'utils/ModalContext'

import Button from 'components/base/Button'
import Search from './comparator/Search'
import Results from './comparator/Results'

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function Comparator() {
  const { setConfigurator } = useContext(ModalContext)

  return (
    <>
      <Search />
      <Results />
      <Buttonwrapper>
        <Button onClick={() => setConfigurator(true)}>Personnaliser</Button>
      </Buttonwrapper>
    </>
  )
}
