import React, { useRef } from 'react'
import styled from 'styled-components'

import useOnScreen from 'hooks/useOnScreen'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: relative;
  max-width: 45em;
  margin: 0 auto 1em;

  ${(props) => props.theme.mq.small} {
    margin: 0 3vw 1em;
  }
`
const Content = styled.div`
  position: relative;
`
const Statistic = styled.div`
  display: flex;
  margin-bottom: 1em;
`
const Number = styled.div`
  font-size: 16em;
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 0.85;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms;

  ${(props) => props.theme.mq.small} {
    font-size: 30vw;
    letter-spacing: 0;
  }
`
const BigText = styled.div`
  font-weight: 900;
  line-height: 1.14;
  text-transform: uppercase;

  ${(props) => props.theme.mq.small} {
    line-height: 1.04;
  }
`
const Line = styled.div`
  font-size: ${(props) => (props.bottom ? '5.39em' : '6.7em')};
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.bottom ? '800ms' : '400ms')};

  ${(props) => props.theme.mq.small} {
    font-size: ${(props) => (props.bottom ? '10.7vw' : '13.5vw')};
  }
`
const Strong = styled.p`
  margin-left: 2rem;
  font-size: 1.25em;
  font-weight: 700;
  font-style: italic;

  ${(props) => props.theme.mq.small} {
    margin-left: 0;
  }
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
export default function Learning() {
  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px')

  return (
    <Wrapper id='informations'>
      <Content>
        <Statistic ref={ref}>
          <Number isOnScreen={isOnScreen}>10</Number>
          <BigText>
            <Line isOnScreen={isOnScreen}>tonnes</Line>
            <Line isOnScreen={isOnScreen} bottom>
              à perdre
            </Line>
          </BigText>
        </Statistic>
        <Strong>
          Voiture pas bien. Train bien. Avion pas bien. Vélo bien.
        </Strong>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sed purus ut sem dignissim vehicula. Morbi dictum mi non ipsum
          sagittis fermentum. Duis at ante vel arcu dignissim dictum a et urna.
        </Text>
        <Text>
          Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <a
            href={'https://nosgestesclimat.fr/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            Nos Gestes Climat
          </a>
        </Text>
        <ButtonWrapper>
          <Button to={'https://nosgestesclimat.fr/'}>
            Je calcule mon empreinte carbone
          </Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
