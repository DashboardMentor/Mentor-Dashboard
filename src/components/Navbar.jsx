// Navbar.js
import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from './logo.png';
import Profile from './Profile';
import Modal from './Modal';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="/learn">Learn</a>
        <a href="/practice">Practice</a>
        <a href="/mentorship">Mentorship</a>
        <a href="/compete">Compete</a>
        <a href="/jobs">Jobs</a>
        <span>|</span>
        <FaEnvelope className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon" onClick={handleProfileClick} />
        <button className="host-btn">+ Host</button>
      </div>
      <Modal show={showProfile} onClose={handleProfileClick}>
        <Profile />
      </Modal>
    </nav>
  );
};

export default Navbar;
