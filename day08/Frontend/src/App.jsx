import React, { useEffect, useState } from 'react';
import axios from "axios"


const App = () => {
  const [notes, setNotes] = useState([])

  const fecthNotes = () => {
    axios.get("https://basic-server-qugq.onrender.com/api/notes")
      .then((res) => {
        setNotes(res.data.notes)
      })
  }


  useEffect(() => {
    fecthNotes()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description } = e.target.elements

    console.log(title.value, description.value)

    axios.post("https://basic-server-qugq.onrender.com/api/notes", {
      title: title.value,
      description: description.value
    }).then(res => {
      console.log(res.data)
      fecthNotes()
    })

  }



  const handleDelete = (noteId) => {
    axios.delete(`https://basic-server-qugq.onrender.com/api/notes/${noteId}`)
      .then(res => {
        console.log("Note deleted")
        fecthNotes()
      })
  }

  // const handleEdit = (noteId, e) => {
  //   // e.preventDefault()

  //   const { title, description } = e.target.elements

  //   axios.patch(`https://basic-server-qugq.onrender.com/api/notes/${noteId}`, {
  //     title: title.value,
  //     description: description.value
  //   })
  //     .then(res => {
  //       console.log(res.data)
  //       fecthNotes()
  //     })
  // }


  return (
    <>

      <form className='' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => { handleDelete(note._id) }}>Delete</button>
              {/* <button onClick={() => { handleEdit(note._id) }}>Edit</button> */}
            </div>
          })
        }

      </div>
    </>
  );
}

export default App;
