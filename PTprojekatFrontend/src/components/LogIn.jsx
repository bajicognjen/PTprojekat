import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import '../index.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/PTprojekatBackend/rest/users/login', {
        username,
        password
      });

      if (response.status === 200) {
        setErrorMessage('');
        const currentUser = response.data;
        navigate('/'); // Redirect to home page after successful login
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Invalid username and/or password');
      } else {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Log In</h1>
        </header>
        <section className="section login-form">
          <form onSubmit={submitLogin} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <button type="submit" className="button" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Login
            </button>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Don't have an account? <Link to="/signIn">Sign In</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LogIn;
