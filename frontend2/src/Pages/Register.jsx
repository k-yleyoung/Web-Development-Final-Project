import React from 'react'

export default function Register() {
  return (
    <div>
              <form action="/register" method="POST">
            <div>
                <label for="name">User</label><br></br>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div>
                <label for="email">Email</label><br></br>
                <input type="text" id="email" name="email" required></input>
            </div>
            <div>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" required></input>
            </div>
            <section>
                <button type="submit">Submit</button>
            </section>
            <br></br>
            <a href="/">Login</a>
            
        </form>
    </div>
  )
}
