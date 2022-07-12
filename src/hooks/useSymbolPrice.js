import {useQuery} from "react-query";
import axios from "axios";

export const useSymbolPrice = () => {
    const { isLoading, isError, data, error } = useQuery('symbolPrice', async () => {
        const res = await axios.get('https://api.binance.com/api/v3/ticker/price')

        return res.data
    }, {staleTime: 36000})

    return { isLoading, isError, data, error }
}