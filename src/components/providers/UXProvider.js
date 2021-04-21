import React, { useState, useEffect } from 'react'
import { useQueryParam, BooleanParam, withDefault } from 'use-query-params'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Télétravail')

  const [embedOpen, setEmbedOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [typeShare, setTypeShare] = useState('simulator')

  const [configuratorOpen, setConfiguratorOpen] = useState(false)
  const [map, setMap] = useQueryParam('map', withDefault(BooleanParam, true))

  const [installPrompt, setInstallPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setInstallPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        setEmbedOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setShareOpen(false)
            setContactOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setEmbedOpen(value)
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setEmbedOpen(false)
            setContactOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setShareOpen(value)
        },
        contactOpen,
        setContactOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setShareOpen(false)
            setEmbedOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setContactOpen(value)
        },
        configuratorOpen,
        setConfiguratorOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setShareOpen(false)
            setEmbedOpen(false)
            setContactOpen(false)
          }
          setConfiguratorOpen(value)
        },
        map,
        setMap,
        typeShare,
        setTypeShare,
        installPrompt,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
