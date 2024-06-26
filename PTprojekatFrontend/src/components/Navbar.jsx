import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Personal Trainer Website Logo" />
          <span>Milos Ostojic</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trainer-profile">Trainer Profile</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/training-plans">Training Plans</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/online-training">Online Training</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
