import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import UXContext from 'utils/UXContext'
import Emoji from 'components/base/Emoji'
import Carpool from './transportation/Carpool'
import Uncertainty from './transportation/Uncertainty'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.7em;
`
const TitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-bottom: 0.25rem;
`
const Title = styled.div`
  position: relative;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
  max-width: 37rem;

  ${(props) => props.theme.mq.small} {
    max-width: calc(100vw - 2.5rem - 2rem);
  }
`
const Chart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const EmojiWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  margin-right: 1rem;
  font-size: 2.5rem;
  line-height: 0.7;

  ${(props) => props.theme.mq.small} {
    width: 2rem;
    margin-right: 0.75rem;
    font-size: 2rem;
  }
`
const SecondaryEmoji = styled(Emoji)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 50%);
  font-size: 0.75em;
`
const Bar = styled.div`
  position: relative;
  width: calc(${(props) => props.percent * 30}rem + 1rem);
  height: 2rem;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    width: calc(${(props) => props.percent * 70}vw + 1rem);
    height: 1.75rem;
    border-radius: 0.875rem;
  }
`
const UncertaintyMarker = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.percent * 100}%;
  width: 0.25rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`
const Value = styled.div`
  display: flex;
  align-items: baseline;
  padding-left: 0.5rem;
  font-size: 1em;
  font-weight: 600;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.text};
  transition: color 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
const Number = styled.span`
  margin-right: 0.6rem;
  font-size: 2rem;
  font-weight: 900;

  ${(props) => props.theme.mq.small} {
    font-size: 1.5rem;
  }
`
const Unit = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`

export default function Transportation(props) {
  const { setCO2E } = useContext(ModalContext)
  const { setConfiguratorOpen } = useContext(UXContext)

  return (
    <Wrapper {...props}>
      <EmojiWrapper>
        <Emoji>{props.transportation.emoji.main}</Emoji>
        <SecondaryEmoji>{props.transportation.emoji.secondary}</SecondaryEmoji>
      </EmojiWrapper>
      <ChartWrapper>
        <TitleWrapper>
          <Title>
            <span onClick={() => setConfiguratorOpen(props.transportation.id)}>
              {props.transportation.label.fr}
            </span>
            <Carpool transportation={props.transportation} />
            <Uncertainty transportation={props.transportation} />
          </Title>
        </TitleWrapper>
        <Chart>
          <Bar
            percent={props.transportation.value / props.max}
            onClick={() => setConfiguratorOpen(props.transportation.id)}
          >
            {props.transportation.value !== props.transportation.base && (
              <UncertaintyMarker
                percent={props.transportation.base / props.transportation.value}
              />
            )}
          </Bar>
          <Value>
            <Number>
              {props.transportation.value > 1000000
                ? Math.round(props.transportation.value / 100000) / 10
                : props.transportation.value > 1000
                ? Math.round(props.transportation.value / 100) / 10
                : Math.round(props.transportation.value * 10) / 10}
            </Number>
            <Unit onClick={() => setCO2E(true)}>
              {props.transportation.value > 1000000
                ? ' t'
                : props.transportation.value > 1000
                ? ' kg'
                : ' g'}
              CO
              <sub>2</sub>e
            </Unit>
          </Value>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  )
}
