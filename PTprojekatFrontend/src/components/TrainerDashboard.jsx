import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import './TrainerDashboard.css';
import deleteIcon from '../assets/delete.png';

const TrainerDashboard = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [notes, setNotes] = useState([]);

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

  useEffect(() => {
    if (selectedClient) {
      fetchNotesByUsername(selectedClient.username);
    }
  }, [selectedClient]);

  const fetchNotesByUsername = (username) => {
    console.log(`Fetching notes for username: ${username}`);
    axios.get(`http://localhost:8080/PTprojekatBackend/rest/notes/${username}`)
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
        if (error.response && error.response.status === 404) {
          setError(`No notes found for user ${username}`);
        } else {
          setError('Failed to fetch notes. Please try again later.');
        }
      });
  };

  const saveNote = async (username, content) => {
    try {
      const response = await axios.post('http://localhost:8080/PTprojekatBackend/rest/notes/add', {
        username,
        content,
      });

      if (response.status === 200) {
        console.log('Note saved successfully');
        setNoteContent('');
        fetchNotesByUsername(username); // Fetch notes after saving successfully
      } else {
        console.error('Failed to save note');
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleNoteSubmit = () => {
    if (selectedClient) {
      saveNote(selectedClient.username, noteContent);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8080/PTprojekatBackend/rest/notes/${noteId}`);

      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);

    } catch (error) {
      console.error('Error deleting note:', error);
    }
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
            <div key={client.username} className="client-info" onClick={() => setSelectedClient(client)}>
              <h2>{client.name} {client.surname}</h2>
              <p>Email: {client.email}</p>
              <p>Date of Birth: {client.dateOfBirth}</p>
              <p>Gender: {client.gender}</p>
              <hr />
            </div>
          ))}
        </div>
        {selectedClient && (
          <div className="notes-container">
            <h2>Leave a note for {selectedClient.name} {selectedClient.surname}</h2>
            <textarea
              rows="4"
              placeholder="Add note..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
            <button onClick={handleNoteSubmit}>Add Note</button>
          </div>
        )}
        {selectedClient && notes.length > 0 && (
          <div className="notes-list">
            <h2>Notes for {selectedClient.name} {selectedClient.surname}</h2>
            <ul>
              {notes.map(note => (
                <li key={note.id}>
                  <p>{note.content}</p>
                  <p>Date: {note.date}</p>
                  <img 
                    src={deleteIcon} 
                    alt="Delete" 
                    onClick={() => handleDeleteNote(note.id)} 
                    className="delete-icon" 
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerDashboard;
