import React from 'react'
import styled from 'styled-components'

import Themes from './embedConfigurator/Themes'
import Code from './embedConfigurator/Code'

const Wrapper = styled.div`
  position: relative;
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 30rem;
  border-bottom: none;
  border-left: 5px solid ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.second};
  color: ${(props) => props.theme.colors.main};
  transition: all 600ms;

  ${(props) => props.theme.mq.large} {
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
  }
`
const Content = styled.div`
  position: relative;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2em;

  ${(props) => props.theme.mq.large} {
    position: fixed;
    top: 0;
    right: 0;
    max-width: 30rem;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  ${(props) => props.theme.mq.small} {
    margin: 0 3vw;
    padding: 1em 0;
  }
`
const ButtonClose = styled.div`
  position: absolute;
  top: 0.25em;
  right: 0.1em;
  font-size: 3em;
  font-weight: 700;
  transform: rotate(45deg);
  cursor: pointer;
  line-height: 0.5;
`
const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 1rem;
`
const Subtitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 1rem;
`
export default function EmbedConfigurator(props) {
  return (
    <Wrapper open={props.configuratorOpen}>
      <Content>
        <ButtonClose
          onClick={() => {
            props.onClose && props.onClose()
            props.setTheme('default')
            props.setConfiguratorOpen(false)
          }}
        >
          +
        </ButtonClose>
        <Title>Intégrer le simulateur</Title>
        <Code id={props.id} />
        <Subtitle>Options d'intégration</Subtitle>
        {props.children}
        <Themes
          themes={props.themes}
          theme={props.theme}
          setTheme={props.setTheme}
        />
      </Content>
    </Wrapper>
  )
}
