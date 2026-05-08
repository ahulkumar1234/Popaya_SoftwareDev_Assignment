const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config()
const notesRoutes = require("./routes/notes.routes");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
    res.send("Notes API Running");
});

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});