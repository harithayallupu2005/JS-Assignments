import React from 'react';

const BuggyComponent = () => {
  throw new Error("I crashed!");
  return <div>Everything is fine</div>;
};

export default BuggyComponent;
