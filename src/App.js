import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import ConfiguratorModal from 'components/modals/ConfiguratorModal'
import RadiativeForcingModal from 'components/modals/RadiativeForcingModal'
import ApproximationModal from 'components/modals/ApproximationModal'
import InstallInstructionsModal from 'components/modals/InstallInstructionsModal'
import Web from 'components/layout/Web'
import Comparator from 'views/Comparator'

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <UXProvider>
            <StyleProvider>
              <ModalProvider>
                <TransportationProvider>
                  <SearchProvider>
                    <GlobalStyle />
                    <Web>
                      <Route>
                        <Comparator />
                      </Route>
                    </Web>
                    <CO2EModal />
                    <ConfiguratorModal />
                    <RadiativeForcingModal />
                    <ApproximationModal />
                    <InstallInstructionsModal />
                  </SearchProvider>
                </TransportationProvider>
              </ModalProvider>
            </StyleProvider>
          </UXProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
