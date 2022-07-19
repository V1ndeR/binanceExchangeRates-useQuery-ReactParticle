import { QueryObserverResult } from 'react-query'

export interface IParticlesProps {
    id: string
}

export interface IUseQueryProps {
    isLoading?: boolean
    isError?: boolean
    data: any
    error: unknown
}

export interface ISymbolPriceProps {
    price: number;
    symbol: string;
}

export interface IInputProps {
    data: ISymbolPriceProps[];
}

export interface IUseSymbolPriceProps {
    symbolPrice: any
    refetch: () => Promise<QueryObserverResult<any, unknown>>
}
