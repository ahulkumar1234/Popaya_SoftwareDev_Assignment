import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, setEditingNote }) {

    return (
        <div className="grid gap-4">

            {
                notes.map(note => (
                    <NoteCard
                        key={note._id}
                        note={note}
                        deleteNote={deleteNote}
                        setEditingNote={setEditingNote}
                    />
                ))
            }

        </div>
    );
}

export default NoteList;