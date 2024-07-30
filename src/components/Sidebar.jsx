// Sidebar.js
import React from 'react';
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="tick-circle">
        <FaCheck className="tick-icon" />
      </div>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <hr />
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/socialmediakit">Social Media Kit</Link> */}
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/availability">Availability</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
