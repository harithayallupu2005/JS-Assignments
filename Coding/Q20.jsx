// Implement a React component that displays a list of items with virtualization
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style} className="list-item">
    Item {index + 1}
  </div>
);

export const VirtualizedList = ({ itemCount }) => {
  return (
    <List
      height={500}   
      itemCount={itemCount} 
      itemSize={35}   
      width={300}    
    >
      {Row}
    </List>
  );
};
