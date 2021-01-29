import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SuggestionProvider from 'components/providers/SuggestionProvider'
import SearchProvider from 'components/providers/SearchProvider'

import ConfiguratorModal from 'components/modals/ConfiguratorModal'
import Web from 'components/layout/Web'
import Iframe from 'components/layout/Iframe'
import Comparator from 'views/Comparator'

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <StyleProvider>
          <UXProvider>
            <ModalProvider>
              <TransportationProvider>
                <SuggestionProvider>
                  <SearchProvider>
                    <GlobalStyle />
                    <Switch>
                      <Route path='/embed'>
                        <Iframe>
                          <Comparator />
                        </Iframe>
                      </Route>
                      <Route>
                        <Web>
                          <Switch>
                            <Route path='/'>
                              <Comparator />
                            </Route>
                          </Switch>
                        </Web>
                      </Route>
                    </Switch>

                    <ConfiguratorModal />
                  </SearchProvider>
                </SuggestionProvider>
              </TransportationProvider>
            </ModalProvider>
          </UXProvider>
        </StyleProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
