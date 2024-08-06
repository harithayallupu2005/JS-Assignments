// Q.10:Write a React component that uses React Context for state management.
import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({ user: null });

  const login = (user) => setState({ user });
  const logout = () => setState({ user: null });

  return (
    <GlobalContext.Provider value={{ state, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Component that consumes the context
export const UserProfile = () => {
  const { state, login, logout } = useGlobalContext();

  return (
    <div>
      {state.user ? (
        <>
          <h1>Welcome, {state.user.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button
            onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

