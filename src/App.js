import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [animal, setAnimal] = useState('');
  return (
    <div className="App">
      <Counter />
      <div className="animal-container">
        <Controls animal={animal} setAnimal={setAnimal} />
        <Display animal={animal} />
      </div>
    </div>
  );
}

export default App;
