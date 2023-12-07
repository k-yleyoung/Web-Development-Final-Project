import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'w3-css/w3.css';

export default function MyDashboard() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        console.log(res);
        setTopics(res.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }

  function viewTopic(topicId, topicName) {
    navigate(`/viewTopic?id=${topicId}&name=${topicName}`);
  }

  return (
    <div className='w3-display-container w3-center w3-black' style={{ minHeight: '100vh' }}>
      <div className='w3-container w3-padding-64'>
        <h2 className='w3-text-white' style={{ fontFamily: 'Courier New, monospace' }}>
          Click on a topic to view posts or add to the conversation!
        </h2>
        <div className='w3-container w3-padding'>
          <button
            onClick={() => navigate('/createTopic')}
            className='w3-button w3-blue w3-padding'
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            Create a new Topic
          </button>
        </div>
        <div className='w3-container w3-padding'>
          <div className='w3-row-padding'>
            {topics.map((topic, index) => (
              <div key={index} className='w3-col s12 m6 l4 w3-margin-bottom'>
                <div className='w3-card w3-padding'>
                  <button
                    onClick={() => viewTopic(topic._id, topic.username)}
                    className='w3-button w3-border w3-margin-top'
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    {topic.username}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
