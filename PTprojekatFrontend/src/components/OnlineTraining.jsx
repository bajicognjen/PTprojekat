// OnlineTraining.jsx

import React from 'react';
import Navbar from './Navbar.jsx';
import './OnlineTraining.css';
import trainerPhoto from '../assets/trainerprofile.jpg';

const OnlineTraining = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Online Training</h1>
          <p>Discover the benefits of personalized online training with Milos Ostojic. Explore various types of programs tailored to your fitness goals, accessible from anywhere.</p>
        </header>
        <section className="section">
          <div className="profile-card">
            <div className="profile-header">
              <img src={trainerPhoto} alt="Trainer Photo" className="trainer-photo" />
              <div className="profile-info">
                <h2>Milos Ostojic</h2>
                <p>Certified Personal Trainer</p>
                <p>Specializing in Online Fitness Coaching</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="profile-details">
            <h3>Personalized Online Training Programs</h3>
            <p>Hi there! I'm Milos Ostojic, your certified personal trainer specializing in online fitness coaching. My online training programs offer a flexible and effective way to achieve your fitness goals without leaving your home.</p>
            <div className="program-list">
              <h4>Program Options</h4>
              <ul>
                <li><strong>Customized Fitness Plans:</strong> Whether you aim to lose weight, build muscle, enhance endurance, or improve overall fitness, I provide personalized workout routines designed specifically for your needs and preferences.</li>
                <li><strong>Variety of Programs:</strong> Choose from a range of online training options, including:
                  <ul>
                    <li>Weight Loss Programs</li>
                    <li>Strength Training</li>
                    <li>Cardiovascular Fitness</li>
                    <li>Flexibility and Mobility</li>
                    <li>Sport-Specific Training</li>
                    <li>Holistic Wellness</li>
                  </ul>
                </li>
              </ul>
            </div>
            <p><strong>Interactive Coaching:</strong> Benefit from real-time feedback, progress tracking, and motivational support throughout your journey.</p>
            <p><strong>Convenience and Flexibility:</strong> Access your workouts anytime, anywhere, fitting seamlessly into your schedule.</p>
            <p><strong>Nutritional Guidance:</strong> Receive personalized dietary recommendations to complement your training efforts.</p>
            <p><strong>Community and Support:</strong> Join a community of like-minded individuals, sharing insights and encouragement.</p>
            <p>Ready to transform your fitness and achieve lasting results? Contact me today to get started with your personalized online training program.</p>
          </div>
        </section>
        <footer className="footer">
          <p>Begin your journey towards better health and fitness with mine online training programs. Take the first step today and achieve your fitness goals from anywhere in the world.</p>
        </footer>
      </div>
    </div>
  );
};

export default OnlineTraining;
