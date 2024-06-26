import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';

const BlogPost = () => {
  const { postId } = useParams();

  const posts = [
    {
      id: 1,
      title: '5 Tips to Stay Motivated',
      content: `Maintaining motivation is key to achieving your fitness goals. Here are 5 tips to stay motivated:
      <ol>
        <li><strong>Set Clear Goals:</strong> Define what you want to achieve and break it down into smaller, achievable milestones.</li>
        <li><strong>Find Your Why:</strong> Understand your reasons for wanting to stay fit and healthy.</li>
        <li><strong>Stay Consistent:</strong> Establish a routine and stick to it, even on days when motivation is low.</li>
        <li><strong>Get Support:</strong> Surround yourself with supportive people who encourage your fitness journey.</li>
        <li><strong>Reward Yourself:</strong> Celebrate your achievements, no matter how small, to stay motivated.</li>
      </ol>
      <p>Remember, motivation fluctuates, but developing habits and a positive mindset will help you stay on track.</p>`
    },
    {
      id: 2,
      title: 'How to Start a Healthy Diet',
      content: `Starting a healthy diet is essential for overall well-being. Here are steps to begin:
      <ol>
        <li><strong>Evaluate Current Eating Habits:</strong> Identify areas for improvement and set realistic goals.</li>
        <li><strong>Incorporate Balanced Meals:</strong> Include a variety of fruits, vegetables, lean proteins, and whole grains.</li>
        <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day.</li>
        <li><strong>Avoid Processed Foods:</strong> Limit intake of sugary drinks, fast food, and snacks high in saturated fats.</li>
        <li><strong>Plan Ahead:</strong> Meal prep can help you make healthier choices and avoid impulsive eating.</li>
      </ol>
      <p>Transitioning to a healthier diet takes time and effort, but small changes can lead to long-term benefits.</p>`
    },
    {
      id: 3,
      title: 'Top 10 Exercises for Beginners',
      content: `Starting a fitness journey can be daunting, especially if you're new to exercise. However, with the right guidance and a structured plan, you can build a strong foundation and progress towards your fitness goals. Here are the top 10 exercises for beginners that are effective, safe, and versatile:
      <ol>
        <li><strong>Bodyweight Squats</strong>: Strengthens the lower body (quadriceps, hamstrings, glutes) and improves overall stability.</li>
        <li><strong>Push-Ups</strong>: Targets chest, shoulders, triceps, and core muscles.</li>
        <li><strong>Walking Lunges</strong>: Works on lower body strength, balance, and coordination.</li>
        <li><strong>Plank</strong>: Strengthens core muscles (abdominals, back, and shoulders).</li>
        <li><strong>Dumbbell Rows</strong>: Targets upper back, shoulders, and arms.</li>
        <li><strong>Glute Bridges</strong>: Activates and strengthens glutes (butt muscles) and improves hip mobility.</li>
        <li><strong>Bicycle Crunches</strong>: Works on abdominal muscles (rectus abdominis and obliques).</li>
        <li><strong>Wall Sit</strong>: Strengthens quadriceps, hamstrings, and glutes.</li>
        <li><strong>Jumping Jacks</strong>: Improves cardiovascular fitness and coordination.</li>
        <li><strong>Mountain Climbers</strong>: Full-body exercise focusing on core strength, agility, and cardiovascular fitness.</li>
      </ol>
      <p>Each of these exercises can be modified to suit your fitness level, and they require minimal to no equipment, making them perfect for beginners. Incorporate these exercises into your routine and start your fitness journey today!</p>`
    }
  ];

  
  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>{post.title}</h1>
        </header>
        <section className="section blog-post-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
