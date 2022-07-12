import { Spinner } from '../UI/spinner/Spinner';
import { useSymbol } from '../../hooks/useSymbol';

import Input from '../UI/input/Input';
import Particles from '../UI/particles/Particles';
import './Binance.css';

const Binance = () => {
    const { isLoading, isError, data, error } = useSymbol()

    if (isLoading) {
        return <Spinner/>;
    }

    if(isError) {
        return <span style={{ color: 'white' }}>Error: {error.message}</span>;
    }

    return (
        <div>
            <Particles id="tsparticles" />
            <Input data={data}/>
        </div>
    )
}

export default Binance