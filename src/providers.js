import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { store } from './redux/store'
import { App } from './App'

export const Providers = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
)