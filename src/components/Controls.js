import './Controls.css';
export default function Controls({ animal, setAnimal }) {
  // const animals = ['cow', 'donkey', 'goose', 'pig', 'sheep', 'spider'];
  const handleChange = (event) => {
    console.log(event.target.value);
    setAnimal(event.target.value);
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
    </div>
  );
}
