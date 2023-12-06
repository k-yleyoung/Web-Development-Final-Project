import React, { useState } from 'react';
import 'w3-css';
import axios from 'axios';

export default function CreateEntry() {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    axios.post('http://localhost:3000/entry', { user, title, text })
      .then(res => {
        alert('done');
      })
      .catch(error => {
        alert('no work');
        console.error('Error fetching users:', error);
      });
  }

  return (
    <div className="w3-container w3-padding-64">
      <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={handleSubmit}>
        <h2 className="w3-center">Create Entry</h2>
        <label className="w3-label w3-text-blue">
          Username:
          <input type="text" value={user} className="w3-input" onChange={handleUserChange} />
        </label>
        <label className="w3-label w3-text-blue">
          Title:
          <input type="text" value={title} className="w3-input" onChange={handleTitleChange} />
        </label>
        <label className="w3-label w3-text-blue">
          Content:
          <input type="text" value={text} className="w3-input" onChange={handleTextChange} />
        </label>
        <button type="submit" className="w3-btn w3-blue w3-margin-top">Submit</button>
      </form>
    </div>
  );
}
