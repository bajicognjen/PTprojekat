// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Personal Trainer</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/online-training" className="navbar-link">Online Training</Link>
          </li>
          <li className="navbar-item">
            <Link to="/trainer-profile" className="navbar-link">About Me</Link>
          </li>
          <li className="navbar-item">
            <Link to="/training-plans" className="navbar-link">Training Plans</Link>
          </li>
          <li className="navbar-item">
            <Link to="/booking" className="navbar-link">Book Session</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
