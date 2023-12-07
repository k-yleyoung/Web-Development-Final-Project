import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'w3-css/w3.css';

export default function MyDashboard() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        console.log(res);
        setTopics(res.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      }, [topics]);
    }
  );

  function viewTopic(topicId, topicName) {
    navigate(`/viewTopic?id=${topicId}&name=${topicName}`);
  }

  const [topicName, setTopicName] = useState('');
  const password = '123';

  function handleNameChange(event) {
    setTopicName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();    

    axios
      .post('http://localhost:3000/users', { username: topicName, password })
      .then((res) => {})
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
      toggleTopic();
      document.getElementById('inputField').innerHTML='';
  }

  function toggleTopic(){
    if(document.getElementById('topicForm').style.display === 'none'){
      document.getElementById('topicForm').style.display = 'block';
    } else {
      document.getElementById('topicForm').style.display = 'none';
    }
  }

  return (
    <div className='w3-display-container w3-center w3-black' style={{ minHeight: '100vh' }}>
      <div className='w3-container w3-padding-64'>
        <h2 className='w3-text-white' style={{ fontFamily: 'Courier New, monospace' }}>
          Click on a topic to view posts or add to the conversation!
        </h2>
        <div className='w3-container w3-padding'>
          <button
            onClick={() => toggleTopic()}
            className='w3-button w3-blue w3-padding'
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            Create a new Topic
          </button>

            <div id='topicForm' className='w3-display-container w3-center w3-black w3-margin-auto' style={{ display: 'none' }}>
            <form onSubmit={handleSubmit} className='w3-card-4 w3-half w3-margin'>
              <div className='w3-container w3-padding'>
                <label style={{ fontFamily: 'Courier New, monospace', color: 'white' }}>
                  <b>Topic Name:</b>
                  <input
                    type='text'
                    value={topicName}
                    onChange={handleNameChange}
                    className='w3-input w3-border'
                    id='inputField'
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
      <br/><br/><br/><br/>
    </div>
  );
}
