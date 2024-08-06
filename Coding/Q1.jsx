// Q.1:Write a React component that displays a list of items from an array.
import React from 'react';

const ItemList = () => {
  const items = ['HARI', 'LALLI', 'MOUNI', 'MADHU'];

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;



