import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'w3-css/w3.css';

export default function ViewTopic() {
  function getTopicId() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('id');
    return topicId;
  }

  const topicId = getTopicId();

  function getTopicName() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicName = urlParams.get('name');
    return topicName;
  }

  const topicName = getTopicName();

  const navigate = useNavigate();
  const [currentEntries, setCurrentEntries] = useState([]);

  function entryInTopic(entry) {
    if (entry.user === topicId) {
      return true;
    } else return false;
  }

  useEffect(() => {
    function getEntries() {
      axios
        .get('http://localhost:3000/entry')
        .then((res) => {
          console.log(res.data);
          var topicEntries = res.data.filter(entryInTopic);
          setCurrentEntries(
            topicEntries.map((entry) => ({
              title: entry.title,
              content: entry.text,
              date: entry.createdAt.substring(0, 10),
              id: entry._id,
            }))
          );
        })
        .catch((error) => {
          console.error('Error fetching entries:', error);
        });
    }
    getEntries();
  }, [topicId]);

  return (
    <div className='w3-display-container w3-center w3-black' style={{ minHeight: '100vh' }}>
      <h2 style={{ fontFamily: 'Courier New, monospace', color: 'white' }}>{topicName}</h2>
      <button
        onClick={() =>
          navigate(
            '/createEntry?topic=' + getTopicId()
          )}
        className='w3-button w3-blue w3-margin-top'
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        Create a new Entry for {topicName}
      </button>
      <div className='w3-container w3-padding'>
        {currentEntries.map((entry, index) => (
          <div key={index} className='w3-container w3-padding w3-border'>
            <h3>{entry.title}</h3>
            <p>{entry.date}</p>
            <h4>{entry.content}</h4>
          </div>
        ))}
      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
