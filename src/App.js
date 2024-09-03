import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Route path="/signup">
          {!isAuthenticated ? <Signup /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/login">
          {!isAuthenticated ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Redirect to="/dashboard" />
          )}
        </Route>
        <Route path="/dashboard">
          {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          <Redirect to={isAuthenticated ? '/dashboard' : '/signup'} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
