import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewTopic() {

    function getTopicId() {
        const urlParams = new URLSearchParams(window.location.search);
        const topicId = urlParams.get('id');
        return topicId;
    }
    //fetch topicID from query param id
    
    const topicId = getTopicId();

    function getTopicName() {
        const urlParams = new URLSearchParams(window.location.search);
        const topicName = urlParams.get('name');
        return topicName;
    }
    //fetch journal from query param id
    
    const topicName = getTopicName();

    const navigate = useNavigate();

    //const [entries, setEntries] = useState([]);
    const [currentEntries, setCurrentEntries] = useState([]);
    //var topicEntries = [];

    function entryInTopic(entry){
        if (entry.user ===topicId){
            console.log(entry.user);
            console.log(topicId);
            return true;
        } 
        else return false;
    }

    useEffect(() => {
        function getEntries() {
          axios.get('http://localhost:3000/entry')
            .then((res) => {
                var topicEntries = res.data.filter(entryInTopic);
                console.log('topicsentries after filter: ');
                console.log(topicEntries);
                setCurrentEntries(topicEntries.map((entry) => ({
                  title: entry.title,
                  content: entry.text,
                  date: entry.createdAt.substring(0,10),
                  id: entry._id,
                })));
              console.log(currentEntries);
            })
            .catch((error) => {
              console.error('Error fetching entries:', error);
            });
        }
        getEntries()

    }, [topicId]);


  return (
    <div>
        <h2>{topicName}</h2>
        <button onClick={() => navigate("/createEntry?topic=" + getTopicId() + "&name=" + getTopicName())}>Create a new Entry for {topicName}</button>
        <div>
        {currentEntries.map((entry, index)=>(
          <div key={index} className='entryBox'>
            <h3>{entry.title}</h3>
            <p>{entry.date}</p>
            <h4>{entry.content}</h4>
          </div>
        ))}
      </div>

    </div>
  )
}