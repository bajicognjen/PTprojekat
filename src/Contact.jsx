// src/Contact.jsx
import React from 'react';
import Navbar from './Navbar';
import './index.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Please fill out the form below to get in touch.</p>
        </header>
        <section className="section contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="link">Send Message</button>
          </form>
        </section>
        <footer className="footer">
          <p>&copy; Milos Ostojic 2024 all rights reserved.®</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
