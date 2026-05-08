# Notes App Frontend

A modern and responsive Notes App frontend built using React.js.  
This application allows users to create, update, delete, and search notes with a clean user interface.

---

# Features

- Add Notes
- Update Notes
- Delete Notes
- Search Notes
- Responsive UI
- Real-time State Updates
- Toast Notifications
- API Integration with Backend

---

# Tech Stack

- React.js
- Axios
- React Hot Toast
- Tailwind CSS
- Vite

---

# Folder Structure

```txt
src
│
├── components
│   ├── NoteForm.jsx
│   ├── NoteList.jsx
│   └── NoteCard.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```
## Installation
## Clone Repository
```
git clone <repository-url>
```

## Go To Frontend Folder
```
cd frontend/notes-ui
```
## Install Dependencies
```
npm install
```
## Run Application
```
npm run dev
```
### Frontend will run on:
```
http://localhost:5173
```

## Environment Setup

### Update backend API URL inside:
```
src/services/api.js
```
Example
```json
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000"
});

export default API;
```
# Main Functionalities
## Create Note

Users can add new notes using the form.

## Update Note

Existing notes can be edited and updated.

## Delete Note

Users can remove notes instantly.

## Search Notes

Users can search notes by title or content.

## Toast Notifications

Success and error messages are displayed using React Hot Toast.

# UI Features
- Clean Layout
- Responsive Design
- Modern Cards
- Interactive Buttons
- Search Bar
- User-friendly Form
- Author

## Rahul Kumar

LinkedIn: https://www.linkedin.com/in/rahul-kumar-3990b618b

GitHub: https://github.com/ahulkumar1234