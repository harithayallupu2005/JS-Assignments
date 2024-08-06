// Q.16:Write a React component that implements a carousel.

import { useState } from 'react';
import './Carousel.css';

export const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="carousel">
      <button onClick={prev}>‹</button>
      <img src={items[current]} alt={`Slide ${current}`} />
      <button onClick={next}>›</button>
    </div>
  );
};
