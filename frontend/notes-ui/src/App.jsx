import { useEffect, useState } from "react";
import API from "./services/api";
import toast, { Toaster } from 'react-hot-toast';
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");

      setNotes(res.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (noteData) => {
    try {
      const res = await API.post("/notes", noteData);
      setNotes([...notes, res.data]);
      toast.success("Note added successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);

      setNotes(
        notes.filter(note => note._id !== id)
      );
      toast.success("Note deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, updatedData) => {
    try {
      const res = await API.put(
        `/notes/${id}`,
        updatedData
      );

      setNotes(
        notes.map(note =>
          note._id === id ? res.data : note
        )
      );
      toast.success("Note updated");
      setEditingNote(null);

    } catch (error) {
      console.log(error);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Toaster />
      <div
        className="min-h-screen bg-gray-100"
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "16px",
          paddingRight: "16px"
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto"
          }}
        >

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#A6539D",
              marginBottom: "40px"
            }}
          >
            Notes App
          </h1>

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            className="text-black"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              marginBottom: "20px",
              outline: "none",
              fontSize: "16px"
            }}
          />

          <NoteForm
            addNote={addNote}
            editingNote={editingNote}
            updateNote={updateNote}
          />

          <NoteList
            notes={filteredNotes}
            deleteNote={deleteNote}
            setEditingNote={setEditingNote}
          />

        </div>
      </div>
    </>
  );
}

export default App;