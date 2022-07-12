import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

const Input = ({data}) => {
    const [inputValue, setInputValue] = useState('')

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
                            '@keyframes rotate' : {
                                '50%' : {
                                    borderImage: 'linear-gradient(360deg, #ff512f,#A37802,#FFC31F) 10'
                                }
                            }
                        }
                    }}
                    renderInput={(params) => <TextField
                        {...params} label="Select crypto"
                    />}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                {
                    data.map((el, idx) => (
                        el.symbol === inputValue &&
                        <div className="card"
                             key={idx}>{el.symbol} {el.price}</div>
                    ))
                }
            </div>
        </>
    )
}

export default Input