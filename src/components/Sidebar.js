import React from 'react';

// Import icons from assets folder
import homeIcon from '../assets/dashboard/overview.svg';
import chartIcon from '../assets/dashboard/chart.svg';
import transactionsIcon from '../assets/dashboard/transactions.svg';
import walletIcon from '../assets/dashboard/wallet-2.svg';
import inboxIcon from '../assets/dashboard/sms.svg';
import settingsIcon from '../assets/dashboard/setting-2.svg';
import logoutIcon from '../assets/dashboard/logout.svg';

// Import logo from assets folder
import cryptxLogo from '../assets/dashboard/Logo.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="logo">
    <img src={cryptxLogo} alt="CryptX Logo" />
    <span className="logo-name">CryptX</span>  {/* Add the name next to the logo */}
  </div>
  <nav>
    <ul>
      <li><img src={homeIcon} alt="Overview" /> Overview</li>
      <li><img src={chartIcon} alt="Chart" /> Chart</li>
      <li><img src={transactionsIcon} alt="Transactions" /> Transactions</li>
      <li><img src={walletIcon} alt="Wallet" /> Wallet</li>
      <li><img src={inboxIcon} alt="Mail Box" /> Mail Box</li>
      <li><img src={settingsIcon} alt="Settings" /> Settings</li>
      <li><img src={logoutIcon} alt="Logout" /> Logout</li>
    </ul>
  </nav>
</div>

  );
};

export default Sidebar;
