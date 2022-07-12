import { useQuery } from 'react-query';
import axios from 'axios';

export const usePrice = () => {
    const { data: price, refetch } = useQuery('price', async () => {
        const { data } = await axios.get('https://api.binance.com/api/v3/ticker/price')

        return data
    })

    return { price, refetch }
}