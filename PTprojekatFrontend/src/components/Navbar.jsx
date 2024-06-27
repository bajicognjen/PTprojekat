import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/PTprojekatBackend/rest/users/currentUser', {
          withCredentials: true,
        });

        if (response.status === 200) {
          setCurrentUser(response.data);
          console.log('Fetched user:', response.data);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/PTprojekatBackend/rest/users/logout', {}, { withCredentials: true });
      setCurrentUser(null);
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Personal Trainer Website Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          {currentUser ? (
            <>
              {currentUser.role === 'TRAINER' ? (
                <>
                  <li className={`nav-item ${location.pathname === '/trainer-dashboard' ? 'active' : ''}`}>
                    <Link to="/trainer-dashboard">Trainer Dashboard</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                    <Link to="/blog">Blog</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/training-plans' ? 'active' : ''}`}>
                    <Link to="/training-plans">Training Plans</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/online-training' ? 'active' : ''}`}>
                    <Link to="/online-training">Online Training</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/trainer-profile' ? 'active' : ''}`}>
                    <Link to="/trainer-profile">Trainer Profile</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                    <Link to="/blog">Blog</Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <button className="nav-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/training-plans' ? 'active' : ''}`}>
                <Link to="/training-plans">Training Plans</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/online-training' ? 'active' : ''}`}>
                <Link to="/online-training">Online Training</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/trainer-profile' ? 'active' : ''}`}>
                <Link to="/trainer-profile">Trainer Profile</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
