import React, { useState } from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:3000/api/createNewUser', { username, password }).then(
      (res) => {
        console.log(res);
        // setJournals(res.data)
      }
    );
    event.preventDefault(); // Prevent the form from submitting and page refresh
  }

  return (
    <div className="w3-container w3-card-4 w3-light-grey w3-margin">
      <form onSubmit={handleSubmit} className="w3-container w3-card-4 w3-light-grey w3-margin">
        <label className="w3-text-blue">
          Username:
          <input
            type="text"
            value={username}
            id="usernameField"
            onChange={handleUserChange}
            className="w3-input w3-border"
          />
        </label>
        <label className="w3-text-blue">
          Password:
          <input
            type="password"
            value={password}
            id="passwordField"
            onChange={handlePassChange}
            className="w3-input w3-border"
          />
        </label>
        <button type="submit" className="w3-btn w3-blue w3-margin-top">Submit</button>
      </form>
    </div>
  );
}
