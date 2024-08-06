// Q.14:Implement a React component that displays a list of items with filtering and sorting.
import React, { useState } from 'react';

const itemsList = [
  { id: 1, name: 'Papaya', category: 'Fruit' },
  { id: 2, name: 'Cabbage', category: 'Vegetable' },
  { id: 3, name: 'Mango', category: 'Fruit' },
  { id: 4, name: 'Cashew-Nuts', category: 'Dry-Fruit' },
];

export const FilterSortList = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('asc');

  const filteredItems = itemsList
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
};



