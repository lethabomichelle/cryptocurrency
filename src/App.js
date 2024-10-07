import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage'; 
import './App.css';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); 
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route
            path="/auth"
            element={<AuthPage onSignUpSuccess={handleSignUpSuccess} />}
          />
          
          <Route
            path="/Dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
          />
         
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
