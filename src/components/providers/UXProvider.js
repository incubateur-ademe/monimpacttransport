import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import UXContext from 'utils/UXContext'
import SearchContext from 'utils/SearchContext'
import TransportationContext from 'utils/TransportationContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Mon Impact Transport')

  const [embedOpen, setEmbedOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  let location = useLocation()
  const [typeShare, setTypeShare] = useState('simulator')
  const [url, setUrl] = useState('')
  const { km, startPlace, endPlace } = useContext(SearchContext)
  const { carpool, displayAll } = useContext(TransportationContext)
  useEffect(() => {
    setUrl(
      typeShare === 'result'
        ? `${location.pathname}?${
            location.pathname === '/' ? `km=${km}&` : ''
          }${
            location.pathname !== '/teletravail'
              ? `carpool=${carpool}&all=${displayAll}&`
              : ''
          }${
            location.pathname !== '/'
              ? `${startPlace ? `start=${startPlace}` : ''}${
                  endPlace ? `&end=${endPlace}` : ''
                }&`
              : ''
          }`
        : ''
    )
  }, [typeShare, location, km, startPlace, endPlace, carpool, displayAll])

  const [installPrompt, setInstallPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setInstallPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    return /iphone|ipad|ipod/.test(userAgent)
  }
  const isInStandaloneMode = () =>
    'standalone' in window.navigator && window.navigator.standalone
  const [iOSPrompt, setIOSPrompt] = useState(false)
  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setIOSPrompt(true)
    }
  }, [])

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        setEmbedOpen: (value) => {
          if (value) {
            window._paq.push(['trackEvent', 'panel', 'embed', 'open'])

            setShareOpen(false)
            setContactOpen(false)
            setTypeShare('simulator')
          }
          setEmbedOpen(value)
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            window._paq.push(['trackEvent', 'panel', 'share', 'open'])

            setEmbedOpen(false)
            setContactOpen(false)
            setTypeShare('simulator')
          }
          setShareOpen(value)
        },
        contactOpen,
        setContactOpen: (value) => {
          window._paq.push(['trackEvent', 'panel', 'contact', 'open'])
          if (value) {
            setShareOpen(false)
            setEmbedOpen(false)
            setTypeShare('simulator')
          }
          setContactOpen(value)
        },
        typeShare,
        url,
        setTypeShare,
        installPrompt,
        iOSPrompt,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
