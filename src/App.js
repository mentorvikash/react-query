import './App.css';
import Routing from './routes';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Link } from 'react-router-dom';


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='navBarMain'>
          <Link to='/day2/superHero'>Day2 Superhero</Link>
          <Link to='/day2/rq-SuperHero'>Day2 RQ Superhero</Link>
        </div>
      </div>
      <Routing />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
