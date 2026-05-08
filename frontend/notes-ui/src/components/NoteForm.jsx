import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function NoteForm({ addNote, editingNote, updateNote }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setContent(editingNote.content);
        }
    }, [editingNote]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            return toast.error("All fields required");
        }

        const noteData = {
            title,
            content
        };

        if (editingNote) {
            updateNote(editingNote._id, noteData);
        } else {
            addNote(noteData);
        }
        
        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                background: "white",
                padding: "24px",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                marginBottom: "32px"
            }}
        >

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    color: "black",
                    borderRadius: "12px",
                    padding: "12px",
                    marginBottom: "16px",
                    outline: "none",
                    fontSize: "16px"
                }}
            />

            <textarea
                placeholder="Enter content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    color: "black",
                    borderRadius: "12px",
                    padding: "12px",
                    marginBottom: "16px",
                    height: "120px",
                    resize: "none",
                    outline: "none",
                    fontSize: "16px"
                }}
            />

            <button
                type="submit"
                style={{
                    width: "100%",
                    background: "#A6539D",
                    color: "white",
                    padding: "12px",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
                className="active:scale-95 duration-200 transition-all ease-in-out"
            >
                {editingNote ? "Update Note" : "Add Note"}
            </button>

        </form>
    );
}

export default NoteForm;