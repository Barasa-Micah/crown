import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard-container">
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
        <a href="#settings">
          <i className="fas fa-cog"></i> Settings
        </a>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Search..." />
          <div className="top-bar-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="content">
          <div className="widget">
            <h3>Good morning, Micah 👋</h3>
            <p>Buy Elite package@1,000.00 KES and get awarded 3,000.00 KES to your M-pesa, buy the Prestige package@2,000.00 KES and get awarded 6,000.00 KES to your M-pesa buy the Deluxe package at 3,500.00 KES and get awarded 10,500.00 KES to your M-pesa buy Grand package package 5,500.00 KES and get awarded 16,500.00 KES to your M-pesa.</p>
          </div>
          <div className="widget">
            <h3>Whatsapp Balance</h3>
            <p>KES 0.00</p>
            <p>+9.7%</p>
          </div>
          <div className="widget">
            <h3>My Package</h3>
            <p>No Service Package</p>
            <div className="actions">
              <a href="#upgrade">Upgrade Now</a>
            </div>
          </div>
          <div className="widget">
            <h3>Total Whatsapp Withdrawal</h3>
            <p>KES 0.00</p>
          </div>
          <div className="widget">
            <h3>Cashback Balance</h3>
            <div className="actions">
              <a href="#redeem">Redeem Now</a>
            </div>
          </div>
          <div className="widget">
            <h3>Recent Transactions</h3>
            <p>Your Records will Appear here</p>
          </div>
          <div className="widget">
            <h3>My Link</h3>
            <input type="text" value="https://crownwave.org/Micah" readOnly />
            <div className="actions">
              <a href="#copy-link">Copy Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
