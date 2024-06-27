import React from 'react';
import Navbar from './Navbar.jsx';
import '../index.css';
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
            <p>Hello! My name is Milos Ostojic, and I am a certified personal trainer with over 15 years of experience in the fitness industry. I hold certifications from the National Academy of Sports Medicine (NASM) and the American Council on Exercise (ACE). I have a proven track record of helping clients achieve their fitness goals through personalized training programs and nutritional guidance.</p>
            <p>My training philosophy is centered around holistic fitness. I believe that achieving optimal health involves a balance of physical exercise, proper nutrition, and mental well-being. I work closely with each client to develop a customized training plan that addresses their specific needs and goals, ensuring a comprehensive approach to fitness.</p>
            <p>With a background in sports science, I specialize in strength training, cardiovascular conditioning, and functional fitness. I am passionate about educating my clients on the importance of form and technique, and I emphasize injury prevention through safe and effective exercise practices.</p>
            <p>In addition to my expertise in fitness training, I am also a certified nutrition coach. I provide clients with tailored nutritional advice to complement their workout routines, helping them to achieve sustainable, long-term results. Whether your goal is to lose weight, build muscle, or improve overall health, I am dedicated to supporting you every step of the way.</p>
            <p>My approach is not just about physical transformation but also about building confidence and fostering a positive mindset. I believe in celebrating small victories and maintaining motivation through continuous support and encouragement. My clients appreciate my friendly demeanor, professionalism, and unwavering commitment to their success.</p>
            <p>When I'm not training clients, I enjoy staying active through various outdoor activities such as hiking, cycling, and running. I also participate in community fitness events and workshops, where I share my knowledge and passion for health and wellness.</p>
            <p>I am excited to work with you and help you embark on your fitness journey. Together, we will set achievable goals, track progress, and celebrate your accomplishments. Let's get started and make your fitness dreams a reality!</p>
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
