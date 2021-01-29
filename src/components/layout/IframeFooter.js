import React from 'react'
import styled from 'styled-components'

import ademe from './assets/ademe.jpg'
import repufrancaise from './assets/repufrancaise.jpg'
import ecolab from './assets/ecolab.png'

import ButtonLink from '@bit/datagir.simulateurs.button-link'

const Wrapper = styled.div`
  position: relative;
  background-color: white;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.width || '40em'};
  margin: 0 auto;
  padding: 1em 0;

  ${(props) => props.theme.mq.small} {
    max-width: none;
    margin: 0 3vw;
  }
`
const Logos = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`
const Logo = styled.img`
  width: 4em;

  ${(props) => props.theme.mq.small} {
    width: 3em;
  }
`

export default function Footer(props) {
  return (
    <Wrapper>
      <Content>
        <Logos>
          <Logo src={repufrancaise} alt='République Française' />
          <Logo src={ademe} alt='ADEME' />
          <Logo src={ecolab} alt='Ecolab' />
        </Logos>
        <ButtonLink href='https://mesfruitsetlegumesdesaison.fr#informations'>
          En savoir plus sur ce simulateur
        </ButtonLink>
      </Content>
    </Wrapper>
  )
}
