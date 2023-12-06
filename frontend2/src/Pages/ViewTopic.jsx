import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function ViewTopic() {

    function getTopicId() {
        const urlParams = new URLSearchParams(window.location.search);
        const topicId = urlParams.get('id');
        return topicId;
    }
    //fetch journal from query param id
    
    const topicId = getTopicId();

    const navigate = useNavigate();

    //const [entries, setEntries] = useState([]);
    const [currentEntries, setCurrentEntries] = useState([]);
    //var topicEntries = [];

    function viewEntry(entryId){
        navigate("/viewEntry?id="+entryId);
    }

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
                  date: entry.timestamp,
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
        <button onClick={() => navigate("/")}>dashboard</button>

        <div>
        {currentEntries.map((entry, index)=>(
          <div key={index} className='entryBox'>
            <button onClick={() => viewEntry(entry.id)}>{entry.title}</button>
            <p>hello</p>
          </div>
        ))}
      </div>

    </div>
  )
}