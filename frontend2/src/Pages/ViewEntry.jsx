import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'w3-css';

function getJournalId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

export default function ViewEntry() {
  const navigate = useNavigate();
  const [journal, setJournal] = useState({
    title: 'My first journal',
    content: 'This is the content of my journal, and it has a lot of words :)',
    date: '12/5/23',
  });

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/entry/${getJournalId()}`);
        setJournal(response.data);
      } catch (error) {
        alert('Error fetching journal entry from the server');
        console.error('Error fetching journal entry:', error);
      }
    };

    fetchJournal();
  }, []);

  return (
    <div className="w3-container w3-card-4 w3-light-grey w3-margin">
      <button onClick={() => navigate("/dashboard")} className="w3-button w3-blue w3-margin">Dashboard</button>
      <h2 className="w3-text-blue">{journal.title}</h2>
      <h4>{journal.date}</h4>
      <p>{journal.content}</p>
    </div>
  );
}
