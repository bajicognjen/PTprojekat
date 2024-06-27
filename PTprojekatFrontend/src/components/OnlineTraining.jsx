
import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';

const OnlineTraining = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Online Training</h1>
          <p>Get fit with our comprehensive online training programs!</p>
        </header>
        <section className="section training-details">
          <h2>Our Online Training Plans</h2>
          <ul>
            <li>Personalized Workout Plans</li>
            <li>Video Tutorials</li>
            <li>Nutrition Guides</li>
            <li>Live Coaching Sessions</li>
          </ul>
        </section>
        <footer className="footer">
          <p>Milos Ostojic 2024 all rights reserved.®</p>
        </footer>
      </div>
    </div>
  );
};

export default OnlineTraining;
