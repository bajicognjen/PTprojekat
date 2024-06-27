// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/PTprojekatBackend/rest/users/currentUser')
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} />} />
        <Route path="/trainer-profile" element={<TrainerProfile currentUser={currentUser} />} />
        <Route path="/booking" element={<Booking currentUser={currentUser} />} />
        <Route path="/training-plans" element={<TrainingPlans currentUser={currentUser} />} />
        <Route path="/blog" element={<Blog currentUser={currentUser} />} />
        <Route path="/online-training" element={<OnlineTraining currentUser={currentUser} />} />
        <Route path="/contact" element={<Contact currentUser={currentUser} />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard currentUser={currentUser} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
