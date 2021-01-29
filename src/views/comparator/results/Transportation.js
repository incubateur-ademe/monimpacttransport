import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.25em;
`
const Title = styled.div`
  margin-left: 3rem;
  margin-bottom: 0.3em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
const Chart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Emoji = styled.div`
  position: relative;
  width: 2.5rem;
  margin-right: 0.5rem;
  font-size: 2.1875em;
  line-height: 1;
`
const Secondary = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(60%, 60%);
  font-size: 0.75em;
`
const Bar = styled.div`
  height: 2.1875em;
  width: calc(${(props) => props.percent * 49}rem + 1rem);
  background-color: ${(props) => props.theme.colors.second};
`
const Value = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  padding-left: 0.3125em;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.second};
`
const Number = styled.span`
  margin-right: 0.6rem;
  font-size: 3.125rem;
  font-weight: 900;
`
const Unit = styled.span``
export default function Transportation(props) {
  return (
    <Wrapper>
      <Title>{props.transportation.label.fr}</Title>
      <Chart>
        <Emoji>
          {props.transportation.emoji.main}
          <Secondary>{props.transportation.emoji.secondary}</Secondary>
        </Emoji>
        <Bar percent={props.transportation.value / props.max} />
        <Value>
          <Number>
            {props.transportation.value > 1000000
              ? Math.round(props.transportation.value / 100000) / 10
              : props.transportation.value > 1000
              ? Math.round(props.transportation.value / 100) / 10
              : Math.round(props.transportation.value * 10) / 10}
          </Number>
          <Unit>
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
    </Wrapper>
  )
}
