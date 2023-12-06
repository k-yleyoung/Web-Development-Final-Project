import React from 'react';
import 'w3-css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const journals = [
  { title: 'entry 1', timestamp: '12/1', id: 1 },
  { title: 'entry 2', timestamp: '11/23', id: 2 },
  { title: 'entry 3', timestamp: '12/4', id: 3 },
  { title: 'entry 4', timestamp: '12/2', id: 4 },
];

function getUsers() {
  axios.get('http://localhost:3000/users')
    .then(res => {
      console.log(res);
      alert(res.data[0].username);
      document.getElementById('myheader').innerHTML = res.data;
      // setJournals(res.data)
    })
    .catch(error => {
      alert('error call to db');
      console.error('Error fetching users:', error);
    });
}

export default function MyDashboard() {
  const navigate = useNavigate();

  function viewEntry(journalId) {
    navigate("/viewEntry?id=" + journalId);
  }

  return (
    <div className="w3-container w3-padding-64">
      <h2 id='myheader' className="w3-text-blue">My Dashboard</h2>
      <button onClick={getUsers} className="w3-btn w3-blue w3-margin-bottom">Click Me</button>

      <div id="createNew" className='entryBox w3-card-4 w3-light-grey w3-margin'>
        <h3>Create New</h3>
        <button onClick={() => navigate("/createEntry")} className="w3-btn w3-blue">Click Me!</button>
      </div>

      <div>
        {journals.map((journal, index) => (
          <div key={index} className='entryBox w3-card-4 w3-light-grey w3-margin'>
            <h3>{journal.title}</h3>
            <h4>{journal.timestamp}</h4>
            <button onClick={() => viewEntry(journal.id)} className="w3-btn w3-blue">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
