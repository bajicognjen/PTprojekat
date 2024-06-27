// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Import axios
import HomePage from './components/HomePage.jsx';
import TrainerProfile from './components/TrainerProfile.jsx';
import Booking from './components/Booking.jsx';
import TrainingPlans from './components/TrainingPlans.jsx';
import Blog from './components/Blog.jsx';
import OnlineTraining from './components/OnlineTraining.jsx';
import Contact from './components/Contact.jsx';
import LogIn from './components/LogIn.jsx';
import SignIn from './components/SignIn.jsx';
import TrainerDashboard from './components/TrainerDashboard.jsx';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainer-profile" element={<TrainerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/training-plans" element={<TrainingPlans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/online-training" element={<OnlineTraining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
