import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import '../index.css';

const TrainerDashboard = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/PTprojekatBackend/rest/users')
      .then(response => {
        setClients(response.data.filter(user => user.role === 'CLIENT'));
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
        setError('Failed to fetch clients. Please try again later.');
      });
  }, []);

  return (
    <div>
      <Navbar />
        <header className="header">
          <h1>Trainer Dashboard</h1>
        </header>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="clients-list">
          {clients.map(client => (
            <div key={client.username} className="client-info">
              <h2>{client.name} {client.surname}</h2>
              <p>Email: {client.email}</p>
              <p>Date of Birth: {client.dateOfBirth}</p>
              <p>Gender: {client.gender}</p>
              <hr />
            </div>
          ))}
        </div>
    </div>
  );
};

export default TrainerDashboard;