// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import TrainerProfile from './components/TrainerProfile.jsx';
import Booking from './components/Booking.jsx';
import TrainingPlans from './components/TrainingPlans.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx'; 
import OnlineTraining from './components/OnlineTraining.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainer-profile" element={<TrainerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/training-plans" element={<TrainingPlans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} /> {/* Ovde koristimo BlogPost */}
        <Route path="/online-training" element={<OnlineTraining />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
