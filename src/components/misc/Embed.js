import React, { useContext } from 'react'

import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'

import EmbedConfigurator from 'components/base/EmbedConfigurator'

export default function Embed() {
  const { themes, theme, setTheme } = useContext(StyleContext)
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)

  return (
    <EmbedConfigurator
      configuratorOpen={configuratorOpen}
      setConfiguratorOpen={setConfiguratorOpen}
      themes={themes}
      theme={theme}
      setTheme={setTheme}
      options={[]}
    />
  )
}
