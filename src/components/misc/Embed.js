import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'

import EmbedConfigurator from 'components/base/EmbedConfigurator'
import Checkbox from 'components/base/Checkbox'
import TransportationList from 'components/misc/configurator/TransportationList'

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 1rem;
`
const Toggle = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  margin-bottom: 1rem;
  padding: 0;
  color: ${(props) => props.theme.colors.main};

  &:focus {
    outline: none;
  }

  &:after {
    content: 'ˇ';
    position: relative;
    top: 0.35em;
    margin-left: 0.3em;
    font-size: 1.5em;
    line-height: 0;
    text-decoration: none !important;
  }
`
export default function Embed() {
  const { themes, theme, setTheme } = useContext(StyleContext)
  const { configuratorOpen, setConfiguratorOpen, map, setMap } = useContext(
    UXContext
  )

  const [listOpen, setListOpen] = useState(false)

  return (
    <EmbedConfigurator
      configuratorOpen={configuratorOpen}
      setConfiguratorOpen={setConfiguratorOpen}
      themes={themes}
      theme={theme}
      setTheme={setTheme}
      onClose={() => setMap(true)}
    >
      <StyledCheckbox onChange={setMap} checked={map}>
        Afficher la carte
      </StyledCheckbox>
      <Toggle onClick={() => setListOpen((prevListOpen) => !prevListOpen)}>
        Choisir les moyens de transports
      </Toggle>
      {listOpen && <TransportationList />}
    </EmbedConfigurator>
  )
}
