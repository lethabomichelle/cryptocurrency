import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/auth"
            element={!isAuthenticated ? <AuthPage onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? '/dashboard' : '/auth'} />}
          />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

