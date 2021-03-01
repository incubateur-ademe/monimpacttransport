import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Emoji from 'components/base/Emoji'
import MagicLink from 'components/base/MagicLink'
import Checkbox from 'components/base/Checkbox'

const Wrapper = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
  }
`
const Column = styled.td`
  padding: 0.5rem 1rem;
`
const Label = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:after {
    content: 'ˇ';
    position: relative;
    top: 0.4em;
    margin-left: 0.2em;
    font-weight: 700;
  }

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
const Details = styled.div`
  padding: 0.5rem 0 0.5rem 2.75rem;
`
const Description = styled.div``
const Source = styled(MagicLink)``
const CheckboxWrapper = styled.td`
  text-align: center;
  vertical-align: top;
  padding: 0.5rem 0;
`
const EmojiWrapper = styled.div`
  position: relative;
  width: 1.5em;
  margin-right: 0.5em;
  font-size: 1.5em;
  line-height: 0.7;
`
const SecondaryEmoji = styled(Emoji)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 50%);
  font-size: 0.75em;
`
export default function Configurator(props) {
  const { configurator, setConfigurator } = useContext(ModalContext)

  return (
    <Wrapper>
      <Column>
        <Label
          active={props.transportation.id === configurator}
          onClick={() =>
            setConfigurator(
              configurator === props.transportation.id
                ? true
                : props.transportation.id
            )
          }
        >
          <EmojiWrapper>
            <Emoji>{props.transportation.emoji.main}</Emoji>
            <SecondaryEmoji>
              {props.transportation.emoji.secondary}
            </SecondaryEmoji>
          </EmojiWrapper>
          {props.transportation.label.fr}
        </Label>
        <Details hidden={props.transportation.id !== configurator}>
          <Description
            dangerouslySetInnerHTML={{
              __html: props.transportation.description.fr,
            }}
          />
          {props.transportation.source && (
            <Source to={props.transportation.source}>Source</Source>
          )}
        </Details>
      </Column>
      <CheckboxWrapper>
        <Checkbox
          checked={props.transportationsVisibles.includes(
            String(props.transportation.id)
          )}
          onChange={() => props.toggleVisible(props.transportation.id)}
          small
        />
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={props.transportationsAlwaysVisibles.includes(
            String(props.transportation.id)
          )}
          onChange={() => props.toggleAlwaysVisible(props.transportation.id)}
          small
        />
      </CheckboxWrapper>
    </Wrapper>
  )
}
