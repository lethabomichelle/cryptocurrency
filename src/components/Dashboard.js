import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import CryptoCards from './CryptoCards';
import CoinGeckoChart from './BTCPriceGraph';  // This is the chart component
import Transactions from './Transactions';
import './dashboard.css';

const Dashboard = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');  // Default to Bitcoin
  const [user, setUser] = useState(null);

  const fetchPrices = async () => {
    // Here you can fetch crypto prices and set them in state
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

  const handleCoinClick = (coinId) => {
    setSelectedCoin(coinId);  // Update selected coin when a card is clicked
  };

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
          <CryptoCards prices={cryptoPrices} onCoinClick={handleCoinClick} />
          <CoinGeckoChart selectedCoin={selectedCoin} />  {/* Pass the selected coin */}
        </div>
        <div className="">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
