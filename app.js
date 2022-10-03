import express from 'express';
import dotenv from 'dotenv';
import { getNote, getNotes, createNote} from './database.js'
import { title } from 'process';

dotenv.config();
const app = express();
app.use(express.json());

app.get("/notes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const notes = await getNote(id);
    res.send(notes) 
})

app.post("/notes", async (req, res) => {
    const { title, contents} = req.body;
    const notes = await createNote(title, contents);
    res.send(notes) 
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})