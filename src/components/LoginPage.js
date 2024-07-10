import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="logo">
        {/* <img src="logo.png" alt="Crown Wave Adverts Logo" /> */}
      </div>
      <h2>CROWN WAVE ADVERTS</h2>
      <form>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your Username"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <button type="submit">Login Now</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
      <Link to="/signup">Create Account</Link>
      <footer>
        &copy; 2024 CROWN WAVE ADVERTS. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
