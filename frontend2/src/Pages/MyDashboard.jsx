import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'react'

//import axios from 'axios'

const journals = [
  {title: 'entry 1', timestamp: '12/1', id:1},
  {title: 'entry 2', timestamp: '11/23', id:2},
  {title: 'entry 3', timestamp: '12/4', id:3},
  {title: 'entry 4', timestamp: '12/2', id:4},
]


export default function MyDashboard() {

  const navigate = useNavigate();

  function viewEntry(journalId){
    navigate("/viewEntry?id="+journalId);
  }

  axios.get('http://localhost:8000/api/').then(
    res=>{
      console.log(res)
    }
  )

  /*const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setJournals(response.data)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();

  }, []);*/

  return (
    <div>
      <div id="createNew" className='entryBox'>
        <h3>Create New</h3>
        <button onClick={() => navigate("/createEntry")}>click me!</button>
      </div>
      <div>
        {journals.map((journal, index)=>(
          <div key={index} className='entryBox'>
            <h3>{journal.title}</h3>
            <h4>{journal.timestamp}</h4>
            <button onClick={() => viewEntry(journal.id)}>view</button>
          </div>
        ))}
      </div>
    </div>
  )
}
