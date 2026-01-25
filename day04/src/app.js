/*
- srver create krna
- server config krna 
*/

const express = require("express")
const app = express() //server create ho jata hai

app.use(express.json())


const notes = [
    // {
    //     title: "title 1",
    //     description: "description 1"
    // }
]



// POST
app.post("/notes", (req, res) => {
    // console.log(req.body)
    notes.push(req.body)
    // console.log(notes)
    res.send("Notes created")
})

// GET
app.get("/notes", (req, res) => {
    res.send(notes)
})

// DELETE /notes/1
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]
    // console.log(req.params.index)
    res.send("Notes deleted successfully")
})

//PATCH  /notes/:index
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description

    res.send("Note updated successfully")
})

module.exports = app