import React, { useState } from 'react';
import axios from 'axios';
import 'w3-css/w3.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  function handleUserChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    axios
      .post('http://localhost:3000/api/createNewUser', { username, password })
      .then((res) => {
        console.log(res);
        // setJournals(res.data)
      });
  }

  return (
    <div className='w3-container w3-padding-64 w3-center'>
      <form onSubmit={handleSubmit} className='w3-card-4 w3-half w3-margin'>
        <div className='w3-container w3-blue'>
          <h2>Register</h2>
        </div>
        <div className='w3-container w3-padding'>
          <label>
            <b>Username:</b>
            <input
              type='text'
              value={username}
              id='usernameField'
              onChange={handleUserChange}
              className='w3-input w3-border'
            />
          </label>
          <br />
          <label>
            <b>Password:</b>
            <input
              type='password'
              value={password}
              id='passwordField'
              onChange={handlePassChange}
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
