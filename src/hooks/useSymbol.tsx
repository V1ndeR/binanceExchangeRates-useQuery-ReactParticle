import { useQuery } from 'react-query'
import axios from 'axios'

import { IUseQueryProps } from '../interfaceTs/interfaceTs'

export const useSymbol = (): IUseQueryProps => {
  const {
    isLoading, isError, data, error
  } = useQuery('symbol', async () => {
    const res = await axios.get('https://api.binance.com/api/v3/ticker/price')

    return res.data
  })

  return {
    isLoading, isError, data, error
  }
}
