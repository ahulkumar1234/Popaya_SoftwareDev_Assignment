function NoteCard({ note, deleteNote, setEditingNote }) {

    return (
        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                marginBottom: "20px"
            }}
        >

            <h2
                style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "10px"
                }}
            >
                {note.title}
            </h2>

            <p
                style={{
                    color: "#4b5563",
                    marginBottom: "20px",
                    fontSize: "16px"
                }}
            >
                {note.content}
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "12px"
                }}
            >

                <button
                    onClick={() => setEditingNote(note)}
                    style={{
                        background: "#eab308",
                        color: "white",
                        padding: "10px 16px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "600"
                    }}
                    className="active:scale-95 duration-200 transition-all ease-in-out"
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteNote(note._id)}
                    style={{
                        background: "#ef4444",
                        color: "white",
                        padding: "10px 16px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "600"
                    }}
                    className="active:scale-95 duration-200 transition-all ease-in-out"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default NoteCard;