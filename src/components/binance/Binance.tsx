import * as React from 'react'
import { FC } from 'react'

import { Spinner } from '../UI/spinner/Spinner'
import { useSymbol } from '../../hooks/useSymbol'

import Particles from '../UI/particles/Particles'
import Input from '../UI/input/Input'

import './Binance.css'

const Binance: FC = () => {
  const {
    isLoading, isError, data, error
  } = useSymbol()

  return (
    <>
      {isLoading ? <Spinner />
        : (
          <div>
            <Particles id="tsparticles" />
            <Input data={data} />
          </div>
        )}
      {isError && (
        <span style={{ color: 'white' }}>
          Error:
          {error as React.ReactNode}
        </span>
      )}
    </>
  )
}

export default Binance
