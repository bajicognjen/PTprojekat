import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/PTprojekatBackend/rest/users/currentUser', {
          withCredentials: true,
        });

        if (response.status === 200) {
          setCurrentUser(response.data);
          console.log('Fetched user:', response.data); // Log the fetched user directly from the response
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
                  <li><Link to="/trainer-dashboard">Trainer Dashboard</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/training-plans">Training Plans</Link></li>
                  <li><Link to="/online-training">Online Training</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/trainer-profile">Trainer Profile</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </>
              )}
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/training-plans">Training Plans</Link></li>
              <li><Link to="/online-training">Online Training</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/trainer-profile">Trainer Profile</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/logIn">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
