import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import './Navbar.css';
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
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Personal Trainer Website Logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          {currentUser ? (
            <>
              {currentUser.role === 'TRAINER' ? (
                <>
                  <li className={`navbar-item ${location.pathname === '/trainer-dashboard' ? 'active' : ''}`}>
                    <Link to="/trainer-dashboard" className="navbar-link">Trainer Dashboard</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                    <Link to="/blog" className="navbar-link">Blog</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link">Home</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/training-plans' ? 'active' : ''}`}>
                    <Link to="/training-plans" className="navbar-link">Training Plans</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/online-training' ? 'active' : ''}`}>
                    <Link to="/online-training" className="navbar-link">Online Training</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/trainer-profile' ? 'active' : ''}`}>
                    <Link to="/trainer-profile" className="navbar-link">Trainer Profile</Link>
                  </li>
                  <li className={`navbar-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                    <Link to="/blog" className="navbar-link">Blog</Link>
                  </li>
                </>
              )}
              <li className="navbar-item">
                <Link onClick={handleLogout} className="navbar-link">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/training-plans' ? 'active' : ''}`}>
                <Link to="/training-plans" className="navbar-link">Training Plans</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/online-training' ? 'active' : ''}`}>
                <Link to="/online-training" className="navbar-link">Online Training</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="navbar-link">Contact</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/trainer-profile' ? 'active' : ''}`}>
                <Link to="/trainer-profile" className="navbar-link">Trainer Profile</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog" className="navbar-link">Blog</Link>
              </li>
              <li className={`navbar-item ${location.pathname === '/login' ? 'active' : ''}`}>
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
