import { Autocomplete, TextField } from '@mui/material'
import { FC, useState } from 'react'
import CachedIcon from '@mui/icons-material/Cached'

import { usePrice } from '../../../hooks/usePrice'
import { IInputProps, ISymbolPriceProps } from '../../../interfaceTs/interfaceTs'

const Input: FC<IInputProps> = (props) => {
    const { data } = props
    const [inputValue, setInputValue] = useState<string>('')

    const { symbolPrice, refetch } = usePrice()

    const refechHandler = (): void => {
        refetch()
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Autocomplete
                    isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
                    value={inputValue}
                    inputValue={inputValue}
                    onInputChange={(_event, newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    id="controllable-states"
                    options={data.map((el: ISymbolPriceProps) => el.symbol)}
                    sx={{
                        width: 300,
                        paddingTop: 10,
                        '.MuiSvgIcon-root': {
                            color: 'orange'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '3px solid',
                                borderRadius: 0,
                                borderImage: 'linear-gradient(#ff512f,#A37802,#FFC31F) 10',
                                animation: 'rotate 3s ease-in infinite'
                            }
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select crypto"
                        />
                    )}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                {
                    symbolPrice
                        ? symbolPrice.map((el: ISymbolPriceProps) => (
                            el.symbol === inputValue
                            && (
                                <div style={{ zIndex: 101 }} key={el.price}>
                                    <div className="card">
                                        {el.symbol}
                                        {' '}
                                        {el.price}
                                        <CachedIcon onClick={refechHandler} style={{ color: 'orange', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            )
                        )) : null
                }

            </div>
        </>
    )
}

export default Input
