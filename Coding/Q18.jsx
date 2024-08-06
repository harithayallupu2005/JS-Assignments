//  Create a React component that uses React Ref for DOM manipulation.

import React, { useRef } from 'react';

export const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};
