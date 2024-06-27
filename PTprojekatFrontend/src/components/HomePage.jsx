import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';
import logo from '../assets/logo.jpeg';

const HomePage = ({ currentUser }) => {
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
          <a href="/trainer-profile" className="link">Learn more</a>
        </section>
        <section className="section services">
          <h2>Services Offered</h2>
          <ul>
            <li>Personal Training Sessions</li>
            <li>Group Classes</li>
            <li>Nutrition Planning</li>
            <li>Online Training</li>
          </ul>
          <a href="/booking" className="link">Book a session</a>
        </section>
        <section className="section blog">
          <h2>Latest Blog Posts</h2>
          <ul>
            <li>5 Tips for Staying Motivated</li>
            <li>How to Start a Healthy Diet</li>
            <li>Top 10 Exercises for Beginners</li>
          </ul>
          <a href="/blog" className="link">Read more</a>
        </section>
        <footer className="footer">
          <p>Milos Ostojic 2024 all rights reserved.®</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
