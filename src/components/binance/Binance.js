import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';
import { Spinner } from '../UI/spinner/Spinner';

import './Binance.css'
import Particles from "../UI/particles/Particles";

const Binance = () => {
    const [inputValue, setInputValue] = useState('');
    const [symbols, setSymbols] = useState([])
    const [symbolPrice, setSymbolPrice] = useState([])

    useQuery('binanceApi', async () => {
        const res = await axios.get('https://api.binance.com/api/v3/ticker/price')

        const symbol = res.data.map(el => el.symbol)
        setSymbols(symbol)

    }, {staleTime: 3600000});

    const { isLoading, isError, error } = useQuery('binanceSymbolPrice', async () => {
        const res = await axios.get('https://api.binance.com/api/v3/ticker/price')

        const price = res.data.map(el => el)
        setSymbolPrice(price)
    })

    const inputVlPrice = symbolPrice.filter(el => el.symbol === inputValue)

    if (isLoading) {
        return <Spinner/>;
    }

    if(isError) {
        return <span style={{ color: 'white' }}>Error: {error.message}</span>;
    }

    return (
        <div>
            <Particles id="tsparticles" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={inputValue}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states"
                    options={symbols}
                    sx={{ width: 300, paddingTop: 10, borderColor: 'primary.main', ".MuiSvgIcon-root": {
                            color: 'orange'
                        } , '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'orange',
                            }}
                }}
                    renderInput={(params) => <TextField
                     {...params} label="Select crypto"
                    />}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                {
                    inputVlPrice.map((el, idx) => (
                        <div className="card"
                             key={idx}>{el.symbol} {el.price}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Binance