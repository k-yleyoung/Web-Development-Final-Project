import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'w3-css/w3.css';

export default function CreateTopic() {
  const [topicName, setTopicName] = useState('');
  const password = '123';
  const navigate = useNavigate();

  function handleNameChange(event) {
    setTopicName(event.target.value);
  }

  function handleSubmit() {
    axios
      .post('http://localhost:3000/users', { username: topicName, password })
      .then((res) => {})
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
    navigate('/');
  }

  return (
    <div className='w3-display-container w3-center w3-black' style={{ minHeight: '100vh' }}>
      <form onSubmit={handleSubmit} className='w3-card-4 w3-half w3-margin'>
        <div className='w3-container w3-blue'>
          <h2 style={{ fontFamily: 'Courier New, monospace', color: 'white' }}>Create Topic</h2>
        </div>
        <div className='w3-container w3-padding'>
          <label style={{ fontFamily: 'Courier New, monospace', color: 'white' }}>
            <b>Topic Name:</b>
            <input
              type='text'
              value={topicName}
              onChange={handleNameChange}
              className='w3-input w3-border'
            />
          </label>
          <br />
          <input
            type='submit'
            value='Submit'
            className='w3-button w3-blue w3-margin-top'
          />
        </div>
      </form>
    </div>
  );
}
