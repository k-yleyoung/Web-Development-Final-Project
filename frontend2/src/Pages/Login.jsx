import React, { useState } from 'react';
import axios from 'axios'; // Fix the import statement for axios
import 'w3-css'; // Include w3-css in your React component

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  function handleUserChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    axios.get('http://localhost:8000/api/').then(
      (res) => {
        console.log(res);
        //setJournals(res.data)
      }
    );
    event.preventDefault(); // Prevent the form from submitting and page refresh
  }

  return (
    <div className='home w3-container'>
      <form onSubmit={handleSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
        <label className="w3-text-blue">
          Username:
          <input
            type="text"
            value={username}
            id='usernameField'
            onChange={handleUserChange}
            className="w3-input w3-border"
          />
        </label>
        <label className="w3-text-blue">
          Password:
          <input
            type="password" // Change the input type to password for sensitive information
            value={password}
            id='passwordField'
            onChange={handlePassChange}
            className="w3-input w3-border"
          />
        </label>
        <button type="submit" className="w3-btn w3-blue w3-margin-top">Submit</button>
      </form>
    </div>
  );
}
