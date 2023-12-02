import React, { useState } from 'react';

const EditEntryForm = ({ entryId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the entry on your Node.js server
      const response = await fetch(`/api/edit-entry/${entryId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      // If successful, you might want to redirect to the dashboard or handle it accordingly
      if (response.ok) {
        // Example using react-router-dom's useHistory
        // history.push('/');
        console.log('Entry updated successfully');
      } else {
        console.error('Failed to update entry');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Entry</button>
      </form>
    </div>
  );
};

export default EditEntryForm;
