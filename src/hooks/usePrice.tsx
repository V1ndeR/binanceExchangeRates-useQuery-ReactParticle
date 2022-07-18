import {
  QueryObserverResult, useQuery
} from 'react-query'
import axios from 'axios'

export const usePrice: () => {
  price: any;
  refetch: () =>
    Promise<QueryObserverResult<any, unknown>> } = () => {
      const { data: price, refetch } = useQuery('price', async () => {
        const { data } = await axios.get('https://api.binance.com/api/v3/ticker/price')

        return data
      })

      return { price, refetch }
    }
