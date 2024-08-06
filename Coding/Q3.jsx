// Q.3:Create a React component that fetches data from an API and displays it.
import React, { useState, useEffect } from 'react';

export const DataFetchingComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://packagejson.com/quotes/random")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData));
  }, []);

  return (
    <>
      <h1>{data.quote}</h1>
      <p>{data.author}</p>
    </>
  );
};


