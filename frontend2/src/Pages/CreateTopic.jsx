import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function CreateTopic() {
    const [topicName, setTopicName] = useState('');
    const password = '123';
    const navigate = useNavigate();


    function handleNameChange(event) {
        setTopicName(event.target.value);
    }

    function handleSubmit() {
        axios.post('http://localhost:3000/users', {username: topicName, password}).then(
            res=>{
            }
          ).catch(error => {
            console.error('Error fetching users:', error);
          });
          navigate("/");
    }
  return (
    <div className='home'>
    <form onSubmit={handleSubmit}>
      <label>
        Topic Name:
        <input type="text" value={topicName} onChange={handleNameChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}
