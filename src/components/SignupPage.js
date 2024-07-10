import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
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
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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
        <button type="submit">Create Account</button>
      </form>
      <Link to="/">Login Now</Link>
      <footer>
        &copy; 2024 CROWN WAVE ADVERTS. All rights reserved.
      </footer>
    </div>
  );
};

export default SignupPage;
