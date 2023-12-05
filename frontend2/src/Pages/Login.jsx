import React from 'react'

export default function Login() {
  return (
    <div className='home'>
        <form action="/login" method="POST">
            <div>
                <label for="email">Email</label><br></br>
                <input type="text" id="email" name="email" required></input>
            </div>
            <div>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" required></input>
            </div>
            <section>
                <button type="submit">Login</button>
            </section>
            <br></br>
            <a href="/register">Create Login</a>
            
        </form>
    </div>
  )
}
