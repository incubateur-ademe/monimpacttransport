import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'fonts/fonts.css'
import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import RadiativeForcingModal from 'components/modals/RadiativeForcingModal'
import ApproximationModal from 'components/modals/ApproximationModal'
import InstallInstructionsModal from 'components/modals/InstallInstructionsModal'
import Web from 'components/layout/Web'
import Search from 'components/misc/Search'
import Itinerary from 'views/Itinerary'
import Distance from 'views/Distance'

const queryClient = new QueryClient()

function App() {
  console.log('app')
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <StyleProvider>
            <UXProvider>
              <GlobalStyle />
              <ModalProvider>
                <TransportationProvider>
                  <SearchProvider>
                    <Web>
                      <Search />
                      <Switch>
                        <Route path='/itineraire'>
                          <Itinerary />
                        </Route>
                        <Route path='/'>
                          <Distance />
                        </Route>
                      </Switch>
                    </Web>
                    <CO2EModal />
                    <RadiativeForcingModal />
                    <ApproximationModal />
                    <InstallInstructionsModal />
                  </SearchProvider>
                </TransportationProvider>
              </ModalProvider>
            </UXProvider>
          </StyleProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
