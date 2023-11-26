import './App.css';
import Routing from './routes';
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='navBarMain'>
          <a href='/day2/superHero'>Day2 Superhero</a>
          <a href='/day2/rq-SuperHero'>Day2 RQ Superhero</a>
        </div>
        <Routing />
      </div>
    </QueryClientProvider>
  );
}

export default App;
