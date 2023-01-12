import { useState } from 'react';
import './Controls.css';
export default function Controls({ animal, setAnimal, setAnimals, setCatchphrases }) {
  // const animals = ['cow', 'donkey', 'goose', 'pig', 'sheep', 'spider'];
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    console.log(event.target.value);
    setAnimal(event.target.value);
    setAnimals((currentState) => [...currentState, event.target.value]);
    // don't do this! state must be immutable!
    // setAnimals((currentState) => currentState.push(event.target.value));
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setCatchphrases((prevValue) => [...prevValue, inputValue]);
    setInputValue('');
  };
  return (
    <div className="controls">
      <h1>Pick an animal</h1>
      <select value={animal} onChange={handleChange}>
        {/* {animals.map((animalString) => (
          <option key={animalString} value={animalString}>
            {animalString.toUpperCase()}
          </option>
        ))} */}
        <option value="cow">Cow</option>
        <option value="donkey">Donkey</option>
        <option value="goose">Goose</option>
        <option value="pig">Pig</option>
        <option value="sheep">Sheep</option>
        <option value="spider">Spider</option>
      </select>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
