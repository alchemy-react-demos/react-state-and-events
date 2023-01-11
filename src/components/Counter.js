import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  // sets up a state variable called count
  // gives you a function called setCount that we use to update State
  // 0 is the initial value
  const [count, setCount] = useState(0);

  const increment = (event) => {
    console.log(event);
    console.log('clicking plus one');
    setCount((currentState) => {
      return currentState + 1;
    });
    // setCount(Math.random() * 10);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>My Counter</h1>
      <h2>{count}</h2>
      <div className="controls">
        <button onClick={increment}>Add 1</button>
        <button onClick={decrement}>Subtract 1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
