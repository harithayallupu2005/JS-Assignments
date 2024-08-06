// Q.9:Create a React component that handles authentication and authorization.
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

export const AuthenticationPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ element }) =>
    isAuthenticated ? element : <Navigate to="/login" />;

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <h2>Login Page</h2>
                <button onClick={login}>Login</button>
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={
                  <div>
                    <h2>Dashboard</h2>
                    <button onClick={logout}>Logout</button>
                  </div>
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
