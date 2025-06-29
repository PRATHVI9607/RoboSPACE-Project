import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure you have logo.png in src/assets

const Navbar = ({ user, setUser }) => {

// This is the NEW, REAL version. Paste this into Navbar.js

const handleLoginSuccess = async (credentialResponse) => {
  try {
    // Send the Google token to our Butler (backend) on port 8080
    const res = await fetch('http://localhost:8080/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: credentialResponse.credential }),
    });

    if (!res.ok) {
      // If the backend gives an error, we stop here
      throw new Error('Login failed on the backend.');
    }

    // Get the user info that our Butler sends back from the database
    const userFromDb = await res.json(); 
    
    console.log('Successfully logged in with backend:', userFromDb);
    
    // Set the user in our app's state with the real data from our database
    setUser(userFromDb); 
    
    // Go to the dashboard
    window.location.href = '/dashboard';
  
  } catch (error) {
    console.error("Error logging in:", error);
    // You could show an error message to the user here
  }
};

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="RoboSPACE Logo" />
          <span>RoboSPACE</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#partner">Partner With Us</a></li>
        <li><a href="/#careers">Careers</a></li>
      </ul>
      <div className="navbar-auth">
        {user ? (
          <div className="navbar-user-info">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <a href="/dashboard" className="dashboard-link">Dashboard</a>
            <button onClick={handleLogout} className="navbar-button logout">Logout</button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            theme="outline"
            size="large"
            shape="pill"
            text="continue_with"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;