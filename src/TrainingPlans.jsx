// src/TrainingPlans.jsx
import React from 'react';
import Navbar from './Navbar';
import './index.css';

const TrainingPlans = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Training Plans</h1>
          <p>Choose the best training plan that suits your fitness goals.</p>
        </header>
        <section className="section training-plans">
          <div className="plan">
            <h2>Beginner Plan</h2>
            <ul>
              <li>3 days a week</li>
              <li>Full body workouts</li>
              <li>Basic exercises</li>
              <li>Nutrition guide</li>
            </ul>
            <a href="/contact" className="link">Sign Up</a>
          </div>
          <div className="plan">
            <h2>Intermediate Plan</h2>
            <ul>
              <li>4 days a week</li>
              <li>Split workouts</li>
              <li>Advanced exercises</li>
              <li>Personalized nutrition</li>
            </ul>
            <a href="/contact" className="link">Sign Up</a>
          </div>
          <div className="plan">
            <h2>Advanced Plan</h2>
            <ul>
              <li>5 days a week</li>
              <li>Intense split workouts</li>
              <li>Expert exercises</li>
              <li>Customized nutrition</li>
            </ul>
            <a href="/contact" className="link">Sign Up</a>
          </div>
        </section>
        <footer className="footer">
          <p>Milos Ostojic 2024 all rights reserved.®</p>
          <a href="/contact" className="link">Contact</a>
        </footer>
      </div>
    </div>
  );
};

export default TrainingPlans;
