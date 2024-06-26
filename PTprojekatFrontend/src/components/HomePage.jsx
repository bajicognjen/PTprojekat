import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import '../index.css';
import logo from '../assets/logo.jpeg';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Welcome to Personal Trainer Website</h1>
          <p>Get fit with the best personal trainer in town!</p>
        </header>
        <section className="section about">
          <h2>About the Trainer</h2>
          <p>Our personal trainer has over 10 years of experience in helping people achieve their fitness goals. Certified and highly recommended.</p>
          <Link to="/trainer-profile" className="link">Learn more</Link>
        </section>
        <section className="section services">
          <h2>Services Offered</h2>
          <ul>
            <li>Personal Training Sessions</li>
            <li>Group Classes</li>
            <li>Nutrition Planning</li>
            <li>Online Training</li>
          </ul>
          <Link to="/booking" className="link">Book a session</Link>
        </section>
        <section className="section blog">
          <h2>Latest Blog Posts</h2>
          <ul>
            <li><Link to="/blog/1" className="link">5 Tips for Staying Motivated</Link></li>
            <li><Link to="/blog/2" className="link">How to Start a Healthy Diet</Link></li>
            <li><Link to="/blog/3" className="link">Top 10 Exercises for Beginners</Link></li>
          </ul>
          <Link to="/blog" className="link">Read more</Link>
        </section>
        <footer className="footer">
          <p>Milos Ostojic 2024 all rights reserved.®</p>
          <Link to="/contact" className="link">Contact</Link>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
