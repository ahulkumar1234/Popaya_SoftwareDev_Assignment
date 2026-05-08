const Note = require("../modals/notes.modal");


const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json({
            success: true,
            message: "All notes fetched successfully!",
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getNoteById = async (req, res) => {
    try {
        const { id } = req.params
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note fetched successfully!",
            note
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const note = await Note.create({
            title,
            content
        });

        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        await note.deleteOne();

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};