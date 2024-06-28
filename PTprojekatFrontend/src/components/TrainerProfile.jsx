import React from 'react';
import Navbar from './Navbar.jsx';
import './TrainerProfile.css';
import trainerPhoto from '../assets/trainerprofile.jpg';

const TrainerProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Trainer Profile</h1>
          <p>Meet your personal trainer who is committed to helping you achieve your fitness goals. Learn more about their qualifications, experience, and training philosophy.</p>
        </header>
        <section className="section trainer-profile">
          <div className="trainer-info">
            <img src={trainerPhoto} alt="Trainer Photo" className="trainer-photo" />
            <h2>About Your Trainer</h2>
            <p>Welcome to the Trainer Profile section. Here you can find all the information about your dedicated personal trainer who will guide you through your fitness journey.</p>
          </div>
          <div className="trainer-details">
            <h3>Milos Ostojic</h3>
            <p>
              Hello! My name is Milos Ostojic, and I am a certified personal trainer with over 15 years of experience in the fitness industry. I hold certifications from the National Academy of Sports Medicine (NASM) and the American Council on Exercise (ACE).
            </p>
            <p>
              I have a proven track record of helping clients achieve their fitness goals through personalized training programs and nutritional guidance. My training philosophy is centered around holistic fitness, emphasizing physical exercise, proper nutrition, and mental well-being.
            </p>
            <p>
              With a background in sports science, I specialize in strength training, cardiovascular conditioning, and functional fitness. I am passionate about educating my clients on the importance of form and technique, and I emphasize injury prevention through safe and effective exercise practices.
            </p>
            <p>
              As a certified nutrition coach, I provide clients with tailored nutritional advice to complement their workout routines, helping them achieve sustainable, long-term results. Whether your goal is weight loss, muscle building, or improving overall health, I am committed to supporting you every step of the way.
            </p>
            <p>
              My approach goes beyond physical transformation to building confidence and fostering a positive mindset. I celebrate small victories and maintain motivation through continuous support and encouragement. Clients appreciate my friendly demeanor, professionalism, and dedication to their success.
            </p>
            <p>
              When I'm not training clients, I enjoy staying active through outdoor activities like hiking, cycling, and running. I also participate in community fitness events and workshops, sharing my knowledge and passion for health and wellness.
            </p>
            <p>
              I am excited to work with you and help you embark on your fitness journey. Together, we will set achievable goals, track progress, and celebrate your accomplishments. Let's get started and make your fitness dreams a reality!
            </p>
          </div>
        </section>
        <footer className="footer">
          <p>Ready to start your fitness journey? Contact today to schedule your first session with me.</p>
        </footer>
      </div>
    </div>
  );
};

export default TrainerProfile;
