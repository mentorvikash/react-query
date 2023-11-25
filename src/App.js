import './App.css';
import Day1 from "./pages/day1"
import Routing from './routes';
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Day1: Introduction</h1>
        {/* <Day1 /> */}
        <Routing />
      </div>
    </QueryClientProvider>
  );
}

export default App;
