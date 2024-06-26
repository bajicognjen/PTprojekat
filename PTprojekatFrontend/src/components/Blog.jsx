import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import '../index.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips to Stay Motivated',
      content: `Staying motivated is key to achieving your fitness goals. Here are 5 tips to help you stay on track:
      <ol>
        <li>Set Clear Goals: Define what you want to achieve and set specific, measurable goals.</li>
        <li>Create a Routine: Establish a consistent workout schedule that fits your lifestyle.</li>
        <li>Find a Workout Buddy: Partnering with someone can provide accountability and motivation.</li>
        <li>Celebrate Small Wins: Acknowledge your progress and celebrate milestones along the way.</li>
        <li>Stay Positive: Focus on the benefits of staying active and maintain a positive mindset.</li>
      </ol>`,
    },
    {
      id: 2,
      title: 'How to Start a Healthy Diet',
      content: `Starting a healthy diet is essential for overall well-being. Here are steps to begin:
      <ol>
        <li>Assess Current Eating Habits: Identify areas for improvement in your diet.</li>
        <li>Set Realistic Goals: Define achievable goals such as adding more vegetables or reducing sugar intake.</li>
        <li>Plan Meals: Prepare a weekly meal plan to ensure balanced nutrition.</li>
        <li>Stay Hydrated: Drink plenty of water throughout the day.</li>
        <li>Seek Professional Advice: Consult with a nutritionist for personalized guidance.</li>
      </ol>`,
    },
    {
      id: 3,
      title: 'Top 10 Exercises for Beginners',
      content: `When selecting exercises for your workout routine, it's crucial to consider several key factors to maximize benefits and reduce the risk of injury:
      <ol>
        <li>Fitness Goals: Define what you want to achieve through exercise. Whether it's building muscle, weight loss, improving fitness, or something else, your goals will influence the choice of exercises.</li>
        <li>Experience Level: Tailor exercises to your experience level. Beginners should start with basic exercises that don't require high technical precision or heavy loads.</li>
        <li>Exercise Variety: Include different types of exercises targeting various muscle groups and aspects of fitness, such as cardio, strength training, flexibility, and balance.</li>
        <li>Safety and Proper Form: It's essential to perform exercises with proper body alignment and technique to avoid injuries. If unsure about correct exercise execution, consult with a trainer or fitness expert.</li>
        <li>Consistency: Regular exercise is key to achieving results. Create a workout plan that includes diverse exercises and stick to it.</li>
        <li>Adaptability of Program: Your exercise program should be adaptable to accommodate your progress and changes in your lifestyle rhythm.</li>
      </ol>`,
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
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
