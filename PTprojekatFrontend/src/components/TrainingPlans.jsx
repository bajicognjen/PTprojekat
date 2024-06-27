import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';

const TrainingPlans = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Training Plans</h1>
          <p>Choose the best training plan that suits your fitness goals. Whether you're a beginner looking to start a fitness journey or an experienced athlete aiming to enhance performance, we have the right plan for you.</p>
        </header>
        <section className="section training-plans">
          <div className="plan">
            <h2>Beginner Plan</h2>
            <p>Start your fitness journey with our Beginner Plan designed to introduce you to fundamental exercises and build a solid fitness foundation. Ideal for those new to structured training programs.</p>
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
            <p>Take your fitness to the next level with our Intermediate Plan, offering more advanced workouts and personalized nutrition guidance to help you achieve your fitness goals effectively.</p>
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
            <p>Challenge yourself with our Advanced Plan designed for experienced athletes and fitness enthusiasts. This plan includes intense split workouts and customized nutrition to maximize your performance.</p>
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
          <p>© 2024 Milos Ostojic. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TrainingPlans;
