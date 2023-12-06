import React, {useState} from 'react'
import axios from 'react'



export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handlePassChange(event) {
        setPassword(event.target.value);
    }

    function handleUserChange(event) {
        setUsername(event.target.value);
    }

    function handleSubmit(event) {
        axios.get('http://localhost:8000/api/').then(
            res=>{
              console.log(res)
              //setJournals(res.data)
            }
          )
    }

  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} id='usernameField' onChange={handleUserChange} />
        </label>
        <label>
          Password:
          <input type="text" value={password} id='passwordField' onChange={handlePassChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
