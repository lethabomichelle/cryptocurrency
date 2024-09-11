import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import CryptoCards from './CryptoCards';
import CoinGeckoChart from './BTCPriceGraph';  // This is the chart component
import Transactions from './Transactions';
import './dashboard.css';

// Import your icons from the assets folder
import searchIcon from '../assets/dashboard/search-normal.svg';  // Example path
import bellIcon from '../assets/dashboard/notification.svg';      // Example path
import helpIcon from '../assets/dashboard/help.svg';      // Example path
import userAvatar from '../assets/dashboard/Avatar.svg';  // Example path

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
        {/* Top Bar */}
        <div className="top-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search type of keywords" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>

          <div className="user-info">
            {/* Moved notification and help icons to the left of the user info */}
            <div className="icon-group">
              <img src={bellIcon} alt="Notifications" className="icon" />
              <img src={helpIcon} alt="Help" className="icon" />
            </div>
            <img src={userAvatar} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <span className="user-name">{user ? 'Laurice' : 'Guest'}</span>
              <span className="user-handle">@laurice22</span>
            </div>
          </div>
        </div>
        
        {/* Crypto Overview and Transactions */}
        <div className="crypto-overview">
          <CryptoCards prices={cryptoPrices} onCoinClick={handleCoinClick} />
          <CoinGeckoChart selectedCoin={selectedCoin} />  {/* Pass the selected coin */}
        </div>

        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
