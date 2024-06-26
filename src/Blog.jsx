// src/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips to Stay Motivated',
      content: `Staying motivated is key to achieving your fitness goals. Here are 5 tips to help you stay on track:
      1. Set Clear Goals: Define what you want to achieve and set specific, measurable goals.
      2. Create a Routine: Establish a consistent workout schedule that fits your lifestyle.
      3. Find a Workout Buddy: Partnering with someone can provide accountability and motivation.
      4. Celebrate Small Wins: Acknowledge your progress and celebrate milestones along the way.
      5. Stay Positive: Focus on the benefits of staying active and maintain a positive mindset.`,
    },
    {
      id: 2,
      title: 'How to Start a Healthy Diet',
      content: `Starting a healthy diet is essential for overall well-being. Here are steps to begin:
      1. Assess Current Eating Habits: Identify areas for improvement in your diet.
      2. Set Realistic Goals: Define achievable goals such as adding more vegetables or reducing sugar intake.
      3. Plan Meals: Prepare a weekly meal plan to ensure balanced nutrition.
      4. Stay Hydrated: Drink plenty of water throughout the day.
      5. Seek Professional Advice: Consult with a nutritionist for personalized guidance.`,
    },
    {
      id: 3,
      title: 'Importance of Cardiovascular Exercises in Your Routine',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui fringilla, eget fermentum odio rutrum. Mauris sed velit ut est vulputate volutpat. Proin nec felis nec nisi auctor eleifend. Nam ut mauris sit amet nunc sollicitudin varius. Donec convallis arcu ac sapien pharetra, quis tristique orci interdum.`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Blog</h1>
          <p>Read our latest articles on fitness, nutrition, and training tips.</p>
        </header>
        <section className="section blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
              <p>{post.content}</p>
            </article>
          ))}
        </section>
        <footer className="footer">
          <p>Stay tuned for more articles. Follow us on social media for updates.</p>
          <a href="/contact" className="link">Contact</a>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
