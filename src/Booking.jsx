// src/Booking.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import './index.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje podataka na server ili neku drugu akciju
    console.log('Booking details:', { name, email, date, time });
    alert('Your booking has been submitted!');
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Book a Training Session</h1>
          <p>Schedule your next training session with our personal trainer.</p>
        </header>
        <section className="section booking-form">
          <h2>Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="link">Submit Booking</button>
          </form>
        </section>
        <footer className="footer">
          <p>Contact us if you have any questions or need assistance with booking.</p>
          <a href="/contact" className="link">Contact</a>
        </footer>
      </div>
    </div>
  );
};

export default Booking;
