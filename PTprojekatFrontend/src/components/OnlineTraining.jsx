import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';
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
        <section className="section online-training">
          <div className="profile-card">
            <div className="profile-header">
              <img src={trainerPhoto} alt="Trainer Photo" className="trainer-photo" />
              <div className="profile-info">
                <h2>Milos Ostojic</h2>
                <p>Certified Personal Trainer</p>
                <p>Specializing in Online Fitness Coaching</p>
              </div>
            </div>
            <div className="profile-details">
              <h3>Personalized Online Training Programs</h3>
              <p>Hi there! I'm Milos Ostojic, your certified personal trainer specializing in online fitness coaching. My online training programs offer a flexible and effective way to achieve your fitness goals without leaving your home.</p>
              <p>**Customized Fitness Plans:** Whether you aim to lose weight, build muscle, enhance endurance, or improve overall fitness, I provide personalized workout routines designed specifically for your needs and preferences.</p>
              <p>**Variety of Programs:** Choose from a range of online training options, including:</p>
              <ul>
                <li>**Weight Loss Programs:** Tailored workouts and nutritional guidance to help you shed excess weight.</li>
                <li>**Strength Training:** Programs focused on building muscle and increasing strength.</li>
                <li>**Cardiovascular Fitness:** Routines designed to improve heart health and stamina.</li>
                <li>**Flexibility and Mobility:** Exercises to enhance flexibility, mobility, and joint health.</li>
                <li>**Sport-Specific Training:** Training plans geared towards athletes looking to excel in their chosen sport.</li>
                <li>**Holistic Wellness:** Comprehensive programs integrating fitness, nutrition, and mental well-being.</li>
              </ul>
              <p>**Interactive Coaching:** Benefit from real-time feedback, progress tracking, and motivational support throughout your journey.</p>
              <p>**Convenience and Flexibility:** Access your workouts anytime, anywhere, fitting seamlessly into your schedule.</p>
              <p>**Nutritional Guidance:** Receive personalized dietary recommendations to complement your training efforts.</p>
              <p>**Community and Support:** Join a community of like-minded individuals, sharing insights and encouragement.</p>
              <p>Ready to transform your fitness and achieve lasting results? Contact me today to get started with your personalized online training program.</p>
            </div>
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
