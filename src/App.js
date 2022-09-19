import { useContext } from 'react';
import './App.css';
import GlobalContext from './context/GlobalContext';
import SomeComp from './SomeComp';


function App() {
  const {count, increaseCount, decreaseCount} = useContext(GlobalContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count {count}</h1>
        <div>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>
        <SomeComp />
      </header>
    </div>
  );
}

export default App;
