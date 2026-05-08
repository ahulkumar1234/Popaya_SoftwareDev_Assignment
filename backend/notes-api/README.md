# Notes API Backend

A simple and professional Notes API built using Node.js, Express, MongoDB, and Mongoose.

---

## Features

- Create Note
- Get All Notes
- Get Single Note
- Update Note
- Delete Note
- MongoDB Database Integration
- Proper Error Handling
- REST API Architecture
- Validation Support

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

---

## Folder Structure

```txt
notes-api
│
├── config
│   └── db.js
│
├── controllers
│   └── notesController.js
│
├── models
│   └── Note.js
│
├── routes
│   └── notesRoutes.js
│
├── .env
├── server.js
└── package.json
```
## Installation
## Clone Repository

````
git clone <repository-url>
````
## Go To Backend Folder
```
cd backend/notes-api
```
## Install Dependencies
```
npm install
```
## Environment Variables

Create a .env file in the root folder.
```
MONGO_URI=your_mongodb_connection_string
PORT=9000
```
## Run Server
## Development
```
npm run dev
```
## Production
```
node app.js
```

## API Endpoints
Get All Notes
```
GET /notes/:id
```
Create Note
```
POST /notes
```
## POST /notes
```json
{
  "title": "Learn Backend",
  "content": "Practice Express and MongoDB"
}
```
Update Note
```
PUT /notes/:id
```
Request Body
```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```
Delete Note
```
DELETE /notes/:id
```
## Validation & Error Handling
- Invalid MongoDB ObjectId handling
- Required field validation
- Proper HTTP status codes
- Error responses with messages

## Author

### Rahul Kumar

LinkedIn: https://www.linkedin.com/in/rahul-kumar-3990b618b

GitHub: https://github.com/ahulkumar1234