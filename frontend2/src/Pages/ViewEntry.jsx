import React from 'react'

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
  return (
    <div>
        <a href='dashboard'>dashboard</a>
        <h2>{journal.title}</h2>
        <h4>{journal.date}</h4>
        <p>{journal.content}</p>

    </div>
  )
}
