// src/TrainerProfile.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';

const TrainerProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Meet Your Trainer</h1>
          <p>Learn more about our experienced and certified personal trainer.</p>
        </header>
        <section className="section profile-details">
          <h2>Trainer Profile</h2>
          <img src="trainer.jpg" alt="Trainer" className="trainer-image" />
          <p>Our trainer has over 10 years of experience in the fitness industry, with a passion for helping people achieve their health and fitness goals. Certified in various training techniques and nutrition, our trainer is dedicated to providing personalized training programs that cater to each individual's needs.</p>
        </section>
        <section className="section specialties">
          <h2>Specialties</h2>
          <ul>
            <li>Weight Loss</li>
            <li>Strength Training</li>
            <li>Cardio Fitness</li>
            <li>Nutrition Planning</li>
          </ul>
        </section>
        <footer className="footer">
          <p>Ready to start your fitness journey? <a href="/booking" className="link">Book a session</a> with our trainer today!</p>
        </footer>
      </div>
    </div>
  );
};

export default TrainerProfile;
