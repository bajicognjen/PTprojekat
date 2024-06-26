import React from 'react';
import Navbar from './Navbar';
import './index.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Please fill out the form below to get in touch.</p>
        </header>
        <section className="section contact-form">
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required style={{ width: '100%', padding: '10px', fontSize: '16px' }}></textarea>
            </div>
            <button type="submit" className="button" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Send Message</button>
          </form>
        </section>
        <section className="section map" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h2>Our Location</h2>
          <iframe
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.4132300042756!2d19.828492175748014!3d45.25965694706372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b104fff922321%3A0x4555f4a8b6acfc0d!2z0JHRg9C70LXQstCw0YAg0L7RgdC70L7QsdC-0ZLQtdGa0LAgMjIsINCd0L7QstC4INCh0LDQtCAyMTAwMA!5e0!3m2!1ssr!2srs!4v1719398140553!5m2!1ssr!2srs"
            style={{ border: 0, maxWidth: '100%' }}
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <footer className="footer" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>&copy; Milos Ostojic 2024 all rights reserved.®</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
