import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

import React, { FC } from 'react'

import Binance from './components/Binance/Binance'

const queryClient = new QueryClient()

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Binance />
  </QueryClientProvider>
)

export default App
