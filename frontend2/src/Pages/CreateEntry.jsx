import React from 'react'

export default function CreateEntry() {
  return (
    <div>
        <h2>Create New Entry</h2>
        <form action="/login" method="POST">
            <div>
                <label for="title">Title</label><br></br>
                <input type="text" id="title" name="title" required></input>
            </div>
            <div>
                <label for="content">Content</label><br></br>
                <input type="text" id="content" name="content" required></input>
            </div>
            <section>
                <button type="submit">Create</button>
            </section>            
        </form>
    </div>
  )
}
