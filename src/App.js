import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Counter />
      <div className="animal-container">
        <Controls />
        <Display />
      </div>
    </div>
  );
}

export default App;
