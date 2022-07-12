import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Binance from './components/binance/Binance';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Binance/>
      </QueryClientProvider>
  );
}

export default App;
