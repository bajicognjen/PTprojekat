// src/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css'; // Koristimo isti CSS fajl kao za HomePage

const BlogPost = () => {
  const { postId } = useParams();

  // Primer objekta blog posta, ovdje možete implementirati logiku za dohvaćanje stvarnih podataka iz baze ili API-ja
  const blogPost = {
    id: 1,
    title: '5 Tips to Stay Motivated',
    content: `Staying motivated is key to achieving your fitness goals. Here are 5 tips to help you stay on track:
    1. Set Clear Goals: Define what you want to achieve and set specific, measurable goals.
    2. Create a Routine: Establish a consistent workout schedule that fits your lifestyle.
    3. Find a Workout Buddy: Partnering with someone can provide accountability and motivation.
    4. Celebrate Small Wins: Acknowledge your progress and celebrate milestones along the way.
    5. Stay Positive: Focus on the benefits of staying active and maintain a positive mindset.`,
  };
  const blogPost2 = {
    id: 2,
    title: 'How to Start a Healthy Diet',
    content: `Starting a healthy diet is essential for overall well-being. Here are steps to begin:
      1. Assess Current Eating Habits: Identify areas for improvement in your diet.
      2. Set Realistic Goals: Define achievable goals such as adding more vegetables or reducing sugar intake.
      3. Plan Meals: Prepare a weekly meal plan to ensure balanced nutrition.
      4. Stay Hydrated: Drink plenty of water throughout the day.
      5. Seek Professional Advice: Consult with a nutritionist for personalized guidance.`,
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>{blogPost.title}</h1>
        </header>
        <section className="section blog-post-content">
          <p>{blogPost.content}</p>
        </section>
        <footer className="footer">
          <p>Stay tuned for more articles. Follow us on social media for updates.</p>
          <a href="/contact" className="link">Contact</a>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
