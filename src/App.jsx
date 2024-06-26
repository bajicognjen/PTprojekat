// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TrainerProfile from './TrainerProfile';
import Booking from './Booking';
import TrainingPlans from './TrainingPlans';
import Blog from './Blog';
import BlogPost from './BlogPost'; 
import OnlineTraining from './OnlineTraining';
import Contact from './Contact';

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
