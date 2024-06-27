import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import '../index.css';

const SignIn = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const submitRegistration = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      // Register user if username is available
      const response = await axios.post('http://localhost:8080/PTprojekatBackend/rest/users/register', {
        name,
        surname,
        dateOfBirth,
        username,
        password,
        gender,
        email
      });

      if (response.status === 200) {
        setUsernameError('');
        navigate('/'); 
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setUsernameError('Username already exists.');
    }
  };

  const handleBlurConfirmPassword = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Sign In</h1>
        </header>
        <section className="section login-form">
          <form onSubmit={submitRegistration} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDob(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
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
              {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlurConfirmPassword}
                required
                ref={passwordRef}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                onBlur={handleBlurConfirmPassword}
                ref={confirmPasswordRef}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
            <button type="submit" className="button" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Sign In
            </button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
