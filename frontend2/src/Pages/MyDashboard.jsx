import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function MyDashboard() {

  const [topics, setTopics] = useState([]);

  function getUsers() {
    axios.get('http://localhost:3000/users').then(
        res=>{
          console.log(res)
          setTopics(res.data)
        }
      )
      .catch(error => {
        alert('error');
        console.error('Error fetching users:', error);
      });
  }

  const navigate = useNavigate();

  getUsers();

  function viewTopic(topicId){
    navigate("/viewTopic?id="+topicId);
  }

  return (
    <div>
      <h2>Click on a topic to see view posts about that topic or to add to the conversation!</h2>
      <div id="createNew" className='entryBox'>
        <button onClick={() => navigate("/createEntry")}>click me!</button>
      </div>
      <div>
        {topics.map((topic, index)=>(
          <div key={index} className='entryBox'>
            <button onClick={() => viewTopic(topic._id)}>{topic.username}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
