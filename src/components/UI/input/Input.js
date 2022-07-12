import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { usePrice } from '../../../hooks/usePrice';
import CachedIcon from '@mui/icons-material/Cached';

const Input = ({data}) => {
    const [inputValue, setInputValue] = useState('')

    const { price, refetch } = usePrice()

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={inputValue}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states"
                    options={data.map(el => el.symbol)}
                    sx={{ width: 300, paddingTop: 10, ".MuiSvgIcon-root": {
                            color: 'orange'
                        } , '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '3px solid',
                                borderRadius: 0,
                                borderImage: 'linear-gradient(#ff512f,#A37802,#FFC31F) 10',
                                animation: 'rotate 3s ease-in infinite'
                            },
                        }
                    }}
                    renderInput={(params) => <TextField
                        {...params} label="Select crypto"
                    />}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                {
                    price ?
                    price.map((el, idx) => (
                        el.symbol === inputValue &&
                        <div style={{zIndex: 101}} key={idx}>
                            <div className="card"
                                 >{el.symbol} {el.price}
                                <CachedIcon onClick={refetch} style={{ color: 'orange', cursor: 'pointer'}}/>
                            </div>
                        </div>
                    )) : null
                }

            </div>
        </>
    )
}

export default Input