import { useQuery } from 'react-query'
import axios from 'axios'

import { IUseSymbolPriceProps } from '../interfaceTs/interfaceTs'

export const usePrice = ():IUseSymbolPriceProps => {
    const { data: symbolPrice, refetch } = useQuery('price', async () => {
        const { data } = await axios.get('https://api.binance.com/api/v3/ticker/price')

        return data
    })

    return { symbolPrice, refetch }
}
