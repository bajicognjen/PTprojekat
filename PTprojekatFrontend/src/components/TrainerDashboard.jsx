import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import './TrainerDashboard.css';

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

  const handleAddNote = (clientId, note) => {
    // Implement adding note functionality
    console.log(`Adding note for client ${clientId}: ${note}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Trainer Dashboard</h1>
        </header>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="clients-list">
          {clients.map(client => (
            <div key={client.username} className="client-info">
              <div className="client-details">
                <h2>{client.name} {client.surname}</h2>
                <p>Email: {client.email}</p>
                <p>Date of Birth: {client.dateOfBirth}</p>
                <p>Gender: {client.gender}</p>
              </div>
              <div className="notes-container">
                <textarea
                  placeholder="Add notes..."
                  rows="3"
                  onChange={(e) => handleAddNote(client.id, e.target.value)}
                ></textarea>
                <button onClick={() => handleAddNote(client.id, '')}>Save Note</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
