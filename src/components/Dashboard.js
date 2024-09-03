import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import CryptoCards from './CryptoCards';
import BTCPriceGraph from './BTCPriceGraph';
import Transactions from './Transactions';
import axios from 'axios';

const Dashboard = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [user, setUser] = useState(null);

  const fetchPrices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crypto/prices', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCryptoPrices(response.data);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      localStorage.setItem('token', token);
      setUser({ token });
      window.history.replaceState(null, '', window.location.pathname);
    }

    fetchPrices(); // Fetch prices when component mounts

    const interval = setInterval(fetchPrices, 60000); // Fetch prices every 1 minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="top-bar">
          <input type="text" placeholder="Search type of keywords" />
          <div className="user-info">
            <span>{user ? 'Logged in' : 'Guest'}</span>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <a href="http://localhost:5000/api/auth/google">Login with Google</a>
            )}
          </div>
        </div>
        <div className="crypto-overview">
          <CryptoCards prices={cryptoPrices} />
          <BTCPriceGraph data={cryptoPrices} />
        </div>
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
