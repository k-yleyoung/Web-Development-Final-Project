import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function getJounralId() {
    const urlParams = new URLSearchParams(window.location.search);
    const journalId = urlParams.get('id');
    return journalId;
}
//fetch journal from query param id

const journalId = getJounralId();

const journal = {title: 'my first journal', content: 'this is the content of my journal, and it has a lot of words :)', date:'12/5/23'}

if(journalId==='2'){
    journal.title="my second journal";
}
if(journalId==='3'){
    journal.title="my third journal";
}
if(journalId==='4'){
    journal.title="my fourth journal";
}


export default function ViewEntry() {
    const navigate = useNavigate();

    function getEntries() {
        axios.get('http://localhost:3000/entry').then(
            res=>{
              console.log(res)
              alert(res.data[0].text)
              //setJournals(res.data)
            }
          )
          .catch(error => {
            alert('error call to db');
            console.error('Error fetching users:', error);
          });
      }


  return (
    <div>
        <button onClick={() => navigate("/dashboard")}>dashboard</button>
        <button onClick={getEntries}>clikc</button>
        <h2>{journal.title}</h2>
        <h4>{journal.date}</h4>
        <p>{journal.content}</p>

    </div>
  )
}
