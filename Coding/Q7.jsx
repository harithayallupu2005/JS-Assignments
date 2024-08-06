// Q.7:Write a React component that uses React Hooks to manage state.
import React, { useState } from 'react';

export const CounterWithHooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const handleNameChange = (event) => setName(event.target.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>

      <div>
        <h2>Enter Your Name:</h2>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Hello, {name}!</p>
      </div>
    </div>
  );
};


