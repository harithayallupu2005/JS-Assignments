// Q.15:Create a React component that uses React Memo for performance optimization.
import React, { useState, memo } from 'react';

const MemoizedItem = memo(({ item }) => {
  console.log('Rendering:', item);
  return <li>{item}</li>;
});

const MemoOptimizationComponent = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [count, setCount] = useState(0);

  const addItem = () => setItems([...items, 'New Item']);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ul>
        {items.map((item, index) => (
          <MemoizedItem key={index} item={item} />
        ))}
      </ul>
      <p>Count: {count}</p>
    </div>
  );
};

export default MemoOptimizationComponent;


