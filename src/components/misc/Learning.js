import React, { useRef } from 'react'
import styled from 'styled-components'
import AnimatedNumber from 'animated-number-react'

import useOnScreen from 'hooks/useOnScreen'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  width: ${(props) => props.width || '37rem'};
  margin: 0 auto;
  padding: 2rem 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: auto;
  }
`
const Content = styled.div`
  position: relative;
`
const Statistic = styled.div`
  margin-bottom: 1em;
`
const FirstLine = styled.div`
  display: flex;
  align-items: baseline;

  font-size: 3.15rem;
  font-weight: 900;
  line-height: 0.9;

  ${(props) => props.theme.mq.small} {
    font-size: 7vw;
  }
`
const Number = styled.div`
  width: 2.22303365em;
  font-size: 13rem;
  font-weight: 900;
  text-align: right;
  color: ${(props) => props.theme.colors.main};
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms;

  ${(props) => props.theme.mq.small} {
    font-size: 36.5vw;
  }
`
const FirstWord = styled.span`
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms 1000ms;
`
const BigText = styled.div`
  font-weight: 900;
  line-height: 0.9;

  ${(props) => props.theme.mq.small} {
    line-height: 1.04;
  }
`
const Line = styled.div`
  font-size: ${(props) => (props.bottom ? '9.09em' : '6.45em')};
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.bottom ? '1400ms' : '1100ms')};

  ${(props) => props.theme.mq.small} {
    font-size: ${(props) => (props.bottom ? '24.2vw' : '17.5vw')};
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
const Strong = styled.p`
  font-size: 1.45rem;
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
          <FirstLine>
            <Number isOnScreen={isOnScreen}>
              {isOnScreen && (
                <AnimatedNumber
                  value={30}
                  formatValue={(value) => Math.round(value) + '%'}
                />
              )}
            </Number>
            <FirstWord isOnScreen={isOnScreen}>des</FirstWord>
          </FirstLine>
          <BigText>
            <Line isOnScreen={isOnScreen}>émissions</Line>
            <Line isOnScreen={isOnScreen} bottom>
              de <Color>CO2</Color>
            </Line>
          </BigText>
        </Statistic>
        <Strong>
          "Hors confinement", le secteur des transports est le 1er secteur
          émetteur de GES.
        </Strong>
        <Text>
          Jusqu’à peu, se déplacer faisait partie intégrante de notre vie
          sociale et professionnelle. À tel point que tout notre environnement
          est structuré autour des transports. Tout invite au voyage, qu’il soit
          court ou long. Mais comment révolutionner nos trajets ?
        </Text>
        <ButtonWrapper>
          <Button
            to={
              'https://multimedia.ademe.fr/infographies/infographie-la-mobilite-ademe/'
            }
          >
            En savoir plus
          </Button>
        </ButtonWrapper>
        <Text>
          Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
          calculer l'empreinte du télétravail sur le climat grace à notre{' '}
          <a
            href={'https://nosgestesclimat.fr/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            simulateur télétravail
          </a>
        </Text>
        <ButtonWrapper>
          <Button to={'https://teletravail.monimpacttransport.fr/'}>
            Calculer l'impact du télétravail
          </Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
