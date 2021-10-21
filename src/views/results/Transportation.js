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
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
  max-width: 37.875rem;

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
  width: ${(props) => props.percent * 100}%;
  height: 2rem;
  transform-origin: left;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    width: calc(${(props) => props.percent * 70}vw + 1rem);
    height: 1.75rem;
    border-radius: 0.875rem;
  }
`

const Value = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.inside ? 'auto' : '100%')};
  right: ${(props) => (props.inside ? '1rem' : 'auto')};
  transform: translateY(-50%);
  display: flex;
  align-items: baseline;
  padding-left: ${(props) => (props.noBar ? 0 : 0.5)}rem;
  font-size: 1em;
  line-height: 0.7;
  color: ${(props) =>
    props.theme.colors[props.inside ? 'background' : 'second']};
  transition: color 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
const Number = styled.span`
  margin-right: 0.6rem;
  font-size: 1.375rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 1.5rem;
  }
`
const Unit = styled.span`
  cursor: pointer;
  font-size: 0.875rem;

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
            <Value
              noBar={props.transportation.value / props.max === 0}
              inside={props.transportation.value / props.max > 0.9}
            >
              <Number>
                {Math.round(props.transportation.value / 10) / 100}
              </Number>
              <Unit onClick={() => setCO2E(true)}>
                {' '}
                kgCO
                <sub>2</sub>e
              </Unit>
            </Value>
          </Bar>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  )
}
