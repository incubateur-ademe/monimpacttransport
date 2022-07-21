import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Emoji from 'components/base/Emoji'
import Carpool from './transportation/Carpool'
import UncertaintyLabel from './transportation/UncertaintyLabel'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.375rem;
`
const TitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-bottom: 0.125rem;
`
const Title = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
  max-width: 30rem;
`
const Chart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const EmojiWrapper = styled.div`
  position: relative;
  width: 2rem;
  margin-right: 1rem;
  font-size: 2rem;
  line-height: 0.7;

  ${(props) => props.theme.mq.small} {
    margin-right: 0.75rem;
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
  height: 1.75rem;
  transform-origin: left;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
`
const Construction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.percent * 100}%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.second} 12.5%,
      ${(props) => props.theme.colors.secondLightest} 12.5%,
      ${(props) => props.theme.colors.secondLightest} 37.5%,
      ${(props) => props.theme.colors.second} 37.5%,
      ${(props) => props.theme.colors.second} 62.5%,
      ${(props) => props.theme.colors.secondLightest} 62.5%,
      ${(props) => props.theme.colors.secondLightest} 87.5%,
      ${(props) => props.theme.colors.second} 87.5%
    );
    background-size: 1rem 1rem;
    background-position: 0 0;
  }
`
const Uncertainty = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props) => props.percent * 100}%;
    height: 100%;
    background: ${(props) => props.theme.colors.secondLightest};
    mask-image: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0.2))
    );
  }
`
const Value = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  display: flex;
  align-items: baseline;
  padding-left: ${(props) => (props.noBar ? 0 : 0.5)}rem;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.second};
  transition: color 200ms ease-out;

  ${(props) => props.theme.mq.medium} {
    left: ${(props) => (props.inside ? 'auto' : '100%')};
    right: ${(props) => (props.inside ? '1rem' : 'auto')};
    color: ${(props) =>
      props.theme.colors[props.inside ? 'background' : 'second']};
  }
`
const Number = styled.span`
  margin-right: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
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
  const { setSource, setCO2E } = useContext(ModalContext)

  return (
    <Wrapper {...props}>
      <EmojiWrapper>
        <Emoji>{props.transportation.emoji.main}</Emoji>
        <SecondaryEmoji>{props.transportation.emoji.secondary}</SecondaryEmoji>
      </EmojiWrapper>
      <ChartWrapper>
        <TitleWrapper>
          <Title>
            <span onClick={() => setSource(props.transportation.id)}>
              {props.transportation.label.fr}{' '}
              {props.distance &&
                ` (${
                  props.distance > 10000
                    ? Math.round(props.distance / 1000)
                    : Math.round(props.distance / 100) / 10
                }km)`}
            </span>
            <Carpool transportation={props.transportation} />
          </Title>
        </TitleWrapper>
        <Chart>
          <Bar percent={props.transportation.total / props.max}>
            {props.construction && (
              <Construction
                percent={
                  props.transportation.construction / props.transportation.total
                }
              />
            )}
            <Uncertainty
              percent={
                props.transportation.uncertainty / props.transportation.total
              }
            />
            <Value
              noBar={props.transportation.total / props.max === 0}
              inside={props.transportation.total / props.max > 0.7}
            >
              <Number>
                {props.transportation.total > 100000
                  ? Math.round(props.transportation.total / 1000)
                  : props.transportation.total > 10000
                  ? Math.round(props.transportation.total / 100) / 10
                  : props.transportation.total > 100
                  ? Math.round(props.transportation.total / 10) / 100
                  : Math.round(props.transportation.total) / 1000}
              </Number>
              <Unit onClick={() => setCO2E(true)}>
                {' '}
                kgCO
                <sub>2</sub>e
              </Unit>
            </Value>
            <UncertaintyLabel transportation={props.transportation} />
          </Bar>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  )
}
