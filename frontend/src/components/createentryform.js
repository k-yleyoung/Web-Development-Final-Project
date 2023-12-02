import React, { useState } from 'react';

const CreateEntryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new entry on your Node.js server
      const response = await fetch('/api/create-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      // If successful, you might want to redirect to the dashboard or handle it accordingly
      if (response.ok) {
        // Example using react-router-dom's useHistory
        // history.push('/');
        console.log('Entry created successfully');
      } else {
        console.error('Failed to create entry');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Entry</button>
      </form>
    </div>
  );
};

export default CreateEntryForm;
