import React, {useState} from 'react'
import axios from 'axios'

export default function CreateEntry() {
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

  
    function handleUserChange(event) {
        setUser(event.target.value);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleTextChange(event) {
        setText(event.target.value);
    }
  
    function handleSubmit(event) {
        axios.post('http://localhost:3000/entry', {user, title, text}).then(
            res=>{
              alert('done')
            }
          ).catch(error => {
            alert('no work');
            console.error('Error fetching users:', error);
          });
    }
  return (
    <div className='home'>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={user} onChange={handleUserChange} />
      </label>
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
