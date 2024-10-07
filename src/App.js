import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage'; // Keep this import if you want to use AuthPage for sign-up
import './App.css';

function App() {
  // Set the initial authentication state to false
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change to false to start without auth

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // Change to true when sign-up is successful
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for sign-up, which redirects to the dashboard upon success */}
          <Route
            path="/auth"
            element={<AuthPage onSignUpSuccess={handleSignUpSuccess} />}
          />
          {/* Route for the dashboard, accessible only if authenticated */}
          <Route
            path="/Dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
          />
          {/* Redirect to the dashboard if authenticated, else redirect to auth page */}
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? '/Dashboard' : '/auth'} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
