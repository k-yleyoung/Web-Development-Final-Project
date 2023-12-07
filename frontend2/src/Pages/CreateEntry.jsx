import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'w3-css/w3.css';

export default function CreateEntry() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const[topicName, setTopicName] = useState('');

  const navigate = useNavigate();

  function getTopicId() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('topic');
    return topicId;
  }

  var topicId = getTopicId();

  function getTopicName() {
    var name = '';

    axios.get('http://localhost:3000/users')
    .then((res) => {
      var topics = res.data
      for(var i=0; i<topics.length; i++){
        if (topics[i]._id === topicId){
          console.log(topics[i])
          name = topics[i].username;
          setTopicName(name);
        }
      }
      
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
    
  }

  getTopicName();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();    

    axios
      .post('http://localhost:3000/entry', { user: topicId, title, text })
      .then((res) => {
        // Handle success if needed
      })
      .catch((error) => {
        console.error('Error creating entry:', error);
      });

    navigate(`/viewTopic?id=${topicId}&name=${topicName}`);
  }

  return (
    <div className='w3-container w3-center w3-black' style={{ padding: 0, minHeight: '100vh' }}>
      <form onSubmit={handleSubmit} className='w3-card-4 w3-half w3-margin w3-margin-left w3-margin-right'>
        <div className='w3-container w3-blue' style={{ padding: 0 }}>
          <h2 className='w3-text-white'>Create Entry for {topicName}</h2>
        </div>
        <div className='w3-container' style={{ padding: 0 }}>
          <label>
            <b>Title:</b>
            <input
              type='text'
              value={title}
              onChange={handleTitleChange}
              className='w3-input w3-border'
            />
          </label>
          <br />
          <label>
            <b>Content:</b>
            <input
              type='text'
              value={text}
              onChange={handleTextChange}
              className='w3-input w3-border'
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
  );
}
