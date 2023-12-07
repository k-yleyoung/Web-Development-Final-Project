import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function CreateEntry() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();


    function getTopicId() {
        const urlParams = new URLSearchParams(window.location.search);
        const topicId = urlParams.get('topic');
        
        return topicId;
    }

    function getTopicName() {
        const urlParams = new URLSearchParams(window.location.search);
        const topicName = urlParams.get('name');
        
        return topicName;
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleTextChange(event) {
        setText(event.target.value);
    }
  
    function handleSubmit() {
        var topicId = getTopicId();
        var topicName = getTopicName();
        axios.post('http://localhost:3000/entry', {user: topicId, title, text}).then(
            res=>{
            }
          ).catch(error => {
            console.error('Error fetching users:', error);
          });

          navigate("/viewTopic?id="+topicId+"&name="+topicName);

    }
  return (
    <div className='home'>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Content:
        <input type="text" value={text} id='passwordField' onChange={handleTextChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}
