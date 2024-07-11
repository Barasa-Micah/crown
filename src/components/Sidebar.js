import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="logo.png" alt="Crown Wave Adverts Logo" />
      <a href="#dashboard">
        <i className="fas fa-tachometer-alt"></i> Dashboard
      </a>
      <a href="#capital">
        <i className="fas fa-chart-line"></i> Capital
      </a>
      <a href="#transactions">
        <i className="fas fa-exchange-alt"></i> Transactions
      </a>
      <a href="#recharge">
        <i className="fas fa-bolt"></i> Recharge
      </a>
      <a href="#transfer">
        <i className="fas fa-paper-plane"></i> Transfer
      </a>
      <a href="#withdrawal">
        <i className="fas fa-university"></i> Withdrawal
      </a>
      <a href="#whatsapp">
        <i className="fas fa-comments"></i> Whatsapp
      </a>
      <a href="#my-team">
        <i className="fas fa-users"></i> My Team
      </a>
      <a href="#agent-claim">
        <i className="fas fa-hand-holding-usd"></i> Agent Claim
      </a>
      <a href="#account-token">
        <i className="fas fa-key"></i> Account Token
      </a>
      <a href="#contact">
        <i className="fas fa-address-book"></i> Contact
      </a>
      <a href="#settings">
        <i className="fas fa-cog"></i> Settings
      </a>
      <a href="#logout">
        <i className="fas fa-sign-out-alt"></i> Logout
      </a>
    </div>
  );
};

export default Sidebar;
